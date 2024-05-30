import React from 'react';
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <div>
        <nav class="navbar navbar-expand-sm bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link" aria-current="page" to="/home">Home</Link>
                    <Link class="nav-link" aria-current="page" to="/">Register</Link>
                    <Link class="nav-link" aria-current="page" to="/login">Login</Link>
                    <Link class="nav-link disabled" aria-disabled="true" to="/recommendation">Recommendations</Link>
                    <Link class="nav-link disabled" aria-disabled="true" to="/contacts">Contacts</Link>
                </div>
                </div>
            </div>
        </nav>

        <Outlet />
        </div>
    );
}

export default NavBar;