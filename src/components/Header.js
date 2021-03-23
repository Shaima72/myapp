import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";



class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Accueil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">A propos</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
        </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Service 1</a>
                                    <a class="dropdown-item" href="#">Autre service action</a>
                                    <a class="dropdown-item" href="#">Dernier service</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="card">
                    <div class="card-body">
                        <h4>Bons de commandes</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;