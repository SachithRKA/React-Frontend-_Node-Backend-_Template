import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import rethinkdb from 'rethinkdb';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3001;

const dbConfig = {
    host: 'localhost',
    port: 28015,
    db: 'test'
};

let connection = null;
rethinkdb.connect(dbConfig, (err, conn) => {
    if (err) throw err;
    connection = conn;
    console.log('Connected to RethinkDB');
});

app.post('/register', async (req, res) => {
    const { email,  password } = req.body;
    console.log(email, password);

    const hashedPassword = await bcrypt.hash(password, 10);

    rethinkdb.table('users').insert({ email, password: hashedPassword }).run(connection, (err, result) => {
        if (err) {
            res.status(500).send('Error registering user');
        } else {
            res.status(200).send('User registered');
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    rethinkdb.table('users').filter({ email }).run(connection, async (err, cursor) => {
      if (err) {
        res.status(500).send('Error logging in');
      } else {
        const users = await cursor.toArray();
        if (users.length === 0) {
          res.status(400).send('User not found');
        } else {
          const user = users[0];
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (isPasswordValid) {
            res.status(200).send('Login successful');
          } else {
            res.status(400).send('Invalid password');
          }
        }
      }
    });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

