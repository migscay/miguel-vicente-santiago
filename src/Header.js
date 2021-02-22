import React from 'react';
import miguel from './miguelsantiago.jpg';
// import ReactDOM from 'react-dom';
//import { BrowserRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Header.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Avatar from '@material-ui/core/Avatar';

function Header() {

    return (
        <div className="header">
            <div> 
            <div className="header__title">
                <h1 >Miguel Vicente Ortega Santiago</h1>
            </div>
            <div className="header__digital">    
                <a href="https://github.com/migscay/" target="_blank">
                    <i class="fab fa-github fa-5x"></i>
                </a>
                <a href="https://www.linkedin.com/in/miguel-vicente-ortega-santiago/" target="_blank">
                <i class="fab fa-linkedin-in fa-5x"></i>
                </a>
            </div>
        </div>
       </div>
)
}

export default Header