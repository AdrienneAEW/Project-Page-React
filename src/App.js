import React, { Component } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import projects from './components/Projects';
const LinkedIn = <i className="fab fa-linkedin-in"></i>
const Behance = <i className="fab fa-behance-square"></i>
const FreeCodeCamp = <i className="fab fa-free-code-camp"></i>
const GitHub = <i className="fab fa-github"></i>
const Twitter = <i className="fab fa-twitter"></i>
const YouTube = <i className="fab fa-youtube"></i>
const ReactIcon = <i className="fab fa-react"></i>



export default class App extends Component {
    
    render() {
        const socialLinks = [
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/adriennewarden',
                title: 'View My LinkedIn Profile',
                icon: LinkedIn
            },
            {
                name: 'Behance',
                link: 'https://www.behance.net/adriennewarden',
                title: 'View My Behance Profile',
                icon: Behance
            },
            {
                name: 'FreeCodeCamp',
                link: 'https://www.freecodecamp.org/adrienneaew',
                title: 'View My FreeCodeCamp Profile',
                icon: FreeCodeCamp
            },
            {
                name: 'GitHub',
                link: 'https://github.com/AdrienneAEW',
                title: 'View My GitHub Profile',
                icon: GitHub
            },
            {
                name: 'Twitter',
                link: 'https://twitter.com/adrienneaew',
                title: 'Find Me On Twitter',
                icon: Twitter
            },
            {
                name: 'YouTube',
                link: 'https://www.youtube.com/channel/UClDatVlurydNRqENecTIcCw',
                title: 'Visit My YouTube Channel',
                icon: YouTube
            },
            {
                name: 'React',
                link: 'https://reactjs.org/docs/getting-started.html',
                title: 'I\'m a React App. Find Out More About React',
                icon: ReactIcon
            }
        ]

        return (
            <div className="project-app-content">
                <Main />
                <Footer socialData={socialLinks} projectsData={projects} />
            </div>
        ) 
    }

}