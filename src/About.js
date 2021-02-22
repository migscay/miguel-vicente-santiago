import React from 'react';
import miguel from './miguelsantiago.jpg';
// import ReactDOM from 'react-dom';
//import { BrowserRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './About.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Avatar from '@material-ui/core/Avatar';

function About() {

    return (
        <div className="about">
            <div className="about_picture">
                <img class="about__img" src={miguel} alt="Miguel Santiago"></img>
            </div>
            <div className="about__paragraph">
                <p>Experienced Analyst/Programmer with decades of experience. I have recently completed the Junior Web Development bootcamp by Generation Australia.
With my knowledge and experience in coding, I can help create effective systems to help business better connect with their customers.</p>
            </div>
        </div>
)
}

export default About