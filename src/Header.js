import React from 'react';
import resume from './resume.pdf';
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
                <div>
                    <h1 className="header__title">Miguel Vicente Ortega Santiago</h1>
                </div>                
                <div className="header__digital">    
                    <a href="https://github.com/migscay/" target="_blank">
                        <i class="fab fa-github fa-5x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/miguel-vicente-ortega-santiago/" target="_blank">
                        <i class="fab fa-linkedin-in fa-5x"></i>
                    </a>
                    <a href={resume} target="_blank">
                    <i class="far fa-file-pdf fa-5x"></i>
                    </a>
                    <a href="mailto:santiagomiguelvicente@gmail.com">
                    <i class="fas fa-envelope-square fa-5x"></i>
                    </a>                    
                </div>
            </div>
        </div>
)
}

export default Header