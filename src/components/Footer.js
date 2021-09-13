import React, { Component } from 'react';
import logos from './Logos';
import '../App.css';

let dateNow = new Date();
let yearNow = dateNow.getFullYear();

const SocialBody = (props) => {
    const socialItems = props.socialData.map((socialItem, index) => {
        return (
            <a key={index} href={socialItem.link} className="aew-social-link" title={socialItem.title} aria-label={socialItem.title}>{socialItem.icon}</a>
        )
    })
    
    return <div className="social-links-container">{socialItems}</div>
}

const FooterLinks = (props) => {
    const projectsLive = props.projectsData.map((liveItem, index) => {
        return (
            <span key={index} value={liveItem.prjbtn}> &nbsp;
            <a href={liveItem.live} className="footer-link" title={liveItem.altlive} aria-label={liveItem.altlive}>{liveItem.prjbtn}</a>
            </span>
        )
    })

    return <p className="footer-text">Live Projects: {projectsLive}</p>
}

class LogoContainer extends Component {
    render() {
        return (
            <div className="logo-container">
                <a href={this.props.link} title={this.props.title} aria-label={this.props.title} className="logo-link">
                    <img src={this.props.img} className={this.props.logoclass} alt={this.props.alt} />
                    <span className="logo-text">{this.props.site}<sup><span className="copyright-date"><i className="far fa-copyright">&nbsp;{yearNow}</i></span></sup></span>
                </a>
            
            </div>
        )
    }
}


export default class Footer extends Component {
     
    render () {
        const {socialData, projectsData} = this.props
        

        return (

            
            <footer>
                <LogoContainer link={logos[0].link} title={logos[0].title} img={logos[0].img} logoclass={logos[0].logoclass} alt={logos[0].alt} site={logos[0].site} />
                                
                <SocialBody socialData={socialData} />

                <FooterLinks projectsData={projectsData} />

                
            </footer>
        )
            
        
    }
}