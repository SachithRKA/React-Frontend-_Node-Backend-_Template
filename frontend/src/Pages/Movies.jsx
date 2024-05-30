import React from "react";
import fetch from "node-fetch";

function Movies(props) {
    const url = 'https://api.themoviedb.org/3/authentication';

    const options = {
        method: 'GET',
        headers: {
            access: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2JlYzA1MWQzZDdkZDBiNTE3YzlmNDA3ZTQxNWMwNSIsInN1YiI6IjY2NDU0YWJmYjU2N2ViNmVhZDMyMGVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7H_QsbMdIfltBLG-DhqFRjrZTDXDDM0zsCeqkbxkIM'
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

    return (
        <div>
            <h1>Movies</h1>
        </div>
    );
}

export default Movies;