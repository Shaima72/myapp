import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Workflow from './components/Workflow';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';


function App() {
    return (
        <div class="wrapper">
            <Dashboard/>
        </div>
    );
  }


export default App;

