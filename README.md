# React-Frontend & Node-Backend Template

This repository serves as a template for future projects, integrating a React frontend with a Node.js backend. This setup provides a solid foundation for web applications, streamlining the development process.

## Repository URL

[React-Frontend & Node-Backend Template](https://github.com/SachithRKA/React-Frontend-_Node-Backend-_Template.git)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
  - [Running the Database](#running-the-database)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This template is designed to simplify the process of setting up a new project with a React frontend and a Node.js backend. It includes all the necessary configurations and scripts to get you started quickly.

## Features

- React.js for building interactive user interfaces.
- Node.js with Express for creating a robust backend server.
- Pre-configured ESLint and Prettier for code quality and formatting.
- Sample API routes and frontend components to demonstrate integration.
- Navigation page for easy navigation through the application.
- Authentication for user registration and login.
- React Router DOM links for seamless navigation.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/)
- [RethinkDB](https://rethinkdb.com/)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/SachithRKA/React-Frontend-_Node-Backend-_Template.git
cd React-Frontend-_Node-Backend-_Template
```

## Running the Application

### Running the Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

    The backend server will start on `http://localhost:3001`.

### Running the Frontend

1. Open a new terminal window/tab and navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

    The frontend server will start on `http://localhost:3000` and will automatically open in your default web browser.

### Running the Database

1. Start RethinkDB:

    ```bash
    rethinkdb
    ```

    RethinkDB will start on `http://localhost:8080`. You can access the RethinkDB web interface to manage your databases and tables.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
