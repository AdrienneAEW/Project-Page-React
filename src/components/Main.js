import React, { Component } from 'react';
import projects from './Projects';
import logos from './Logos';
import '../App.css';

let adrienneAEWEmail = <a href="mailto:adrienne@adrienneaew.me" title="E-mail me" aria-label="E-mail me."><i className="bi bi-envelope-open-fill"></i> E-mail</a>

let adrienneContactForm = <a href="https://adrienneaew.me/AEWForms/ContactSass/adrienneAEW.html" title="Contact me via contact form" aria-label="Contact me via contact form."><i className="bi bi-pencil-square"></i> Contact</a>

let adrienneAEWPortfolio = <a href="https://adrienneaew.me/Portfolios/AEWPortfolio/AEWPortfolio.html" title="View My Portfolio" aria-label="View My Portfolio"><i className="bi bi-briefcase-fill"></i> Portfolio</a>

let adrienneAEWDesigner = <a href="https://adrienneaew.me/DesignerResume/AEWDesigner.html" title="View My Online Designer Resume" aria-label="View My Online Designer Resume"><i className="bi bi-person-lines-fill"></i> Resume</a>



const Specs = (props) => {
    const specifications = props.specsData.map((spec, index) => {
        return (
            <div key={index} className="project-specs">
                <div className="spec-container"><strong>Fonts:</strong> {spec.fonts}</div>
                <div className="spec-container"><strong>Icons:</strong> {spec.icons}</div>
                <div className="spec-container"><strong>Images:</strong> {spec.images}</div>
                <div className="spec-container"><strong>Colors:</strong> &nbsp;{spec.colors}</div>
            </div>
        )
    })
    return <div className="project-specs"><h2>Project Specs</h2> {specifications}</div>
}

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Ind: 0,
            origfull: 'https://1drv.ms/u/s!AsShLFW0DLmuhLZg4ypBoYxrwVE0MQ',
            livefull: 'https://1drv.ms/u/s!AsShLFW0DLmuhLZhkothGcn2yV_MdA',
        }

        this.projectOne = this.projectOne.bind(this)
        this.projectTwo = this.projectTwo.bind(this)
        this.projectThree = this.projectThree.bind(this)
    }

    projectOne() {
        this.setState({
            Ind: 0,
            origfull: 'https://1drv.ms/u/s!AsShLFW0DLmuhLZg4ypBoYxrwVE0MQ',
            livefull: 'https://1drv.ms/u/s!AsShLFW0DLmuhLZhkothGcn2yV_MdA'
        })
    }

    projectTwo() {
        this.setState({
            Ind: 1,
            origfull: 'https://1drv.ms/u/s!AsShLFW0DLmuhowGqfdJgpjfXvSM5A',
            livefull: 'https://1drv.ms/u/s!AsShLFW0DLmuhotyLgJJ4aPtDKfo7A'
        })
    }

    projectThree() {
        this.setState({
            Ind: 2,
            origfull: 'https://1drv.ms/u/s!AsShLFW0DLmuhotd0Z_S5-r2c_d2AQ',
            livefull: 'https://1drv.ms/u/s!AsShLFW0DLmuhowOrGatzCAO41DjwQ'
        })
    }

    render () {
        return (
        <main className="main-content">
            <header>
                <div className="header-content">
                    <h1 id="project-title">{projects[this.state.Ind].name}</h1>
                    <h3>Project Details</h3>
                </div>
                <figure className="header-logo-container">
                    <a href={logos[1].link} className="header-logo-link" title={logos[1].title} aria-label={logos[1].title}>
                        <img src={logos[1].img} className="logo-img" alt={logos[1].alt} /> 
                        &nbsp;<span className="logo-text"> {logos[1].site}</span>
                    </a>
                </figure>
            </header>
            <div className="row project-nav sticky-top">
                <h5 className="col-1">Projects: </h5>
                <div className="col-5 btn-group project-btn-container" role="group" aria-label="Projects Menu">
                    <button type="button" className="btn btn-outline-dark btn-group-small project-btn" aria-label={projects[0].navtitle} aria-pressed="true" title={projects[0].navtitle} onClick={this.projectOne}>{projects[0].prjbtn}</button>
                    <button type="button" className="btn btn-outline-dark btn-group-small project-btn" title={projects[1].navtitle} aria-label={projects[1].navtitle} aria-pressed="true" onClick={this.projectTwo}>{projects[1].prjbtn}</button>
                    <button type="button" className="btn btn-group-small btn-outline-dark btn-group-small project-btn" title={projects[2].navtitle} aria-label={projects[2].navtitle} aria-pressed="true" onClick={this.projectThree}>{projects[2].prjbtn}</button>
                </div>
            </div>
            
            <div className="row justify-content-center project-open">
                <div className="col-md-5 align-self-center project-description">
                     <h2>Project Overview</h2>
                    {projects[this.state.Ind].description}

                    <h2>Goals</h2>
                    {projects[this.state.Ind].goals}
                </div>               
                
                <figure className="col-md-3 align-self-center open-left project-img-container">
                    <a href={this.state.origfull} title="View this image at full size." target="_blank" rel="noreferrer" aria-label="View the full size image.">
                        <img src={projects[this.state.Ind].imgorg} className="project-img project-org-img img-thumbnail" alt={projects[this.state.Ind].altorg} />
                    </a>
                    <figcaption className="project-caption">
                        <a href={projects[this.state.Ind].original} target="_blank" rel="noreferrer" title={projects[this.state.Ind].titleorg} alt={projects[this.state.Ind].altorg} aria-label="Visit the original website.">{projects[this.state.Ind].captionorg}</a>
                    </figcaption>
                </figure>

                <figure className="col-md-3 align-self-center open-right project-img-container">
                    <a href={this.state.livefull} title="View the image at full size." target="_blank" rel="noreferrer" aria-label="View the full size.">
                        <img src={projects[this.state.Ind].imglive} className="project-img project-live-img img-thumbnail" alt={projects[this.state.Ind].altlive} />
                    </a>
                    <figcaption className="project-caption">
                        <a href={projects[this.state.Ind].live} title={projects[this.state.Ind].titlelive} aria-label="Visit the live project page.">{projects[this.state.Ind].captionlive}</a>
                    </figcaption>
                </figure>
            </div>

            <div className="row project-open-specs">
                <div className="col-md-7 open-specs">
                    <Specs specsData={projects[this.state.Ind].specs} />
                </div>
                <div className="col-md-5 project-role">
                    <h2>My Role</h2>
                    <p>All research, design and development of this project was done by me. Practice makes perfect and creating this project is an opportunity to put into practice my UX, front-end development and webiste design skills.</p>
                    <h2>About the Series</h2>
                    <p>The site owners are not consulted about, nor have approved, the updates &mdash; I stick to basics. Updates are based on information architecture, ease of use and creating a more inviting user experience. The main focus is on constructing elements that can be scaled, are accessible and assist with conversions.</p>
                    <h2>Owner Persona</h2>
                    {projects[this.state.Ind].persona}
                </div>
            </div>

            <div id="project-issues" className="row issue-details">
                <h2>Issues and Solutions</h2>
                <div className="card issue-detail detail1">
                    <div className={projects[this.state.Ind].issueimgs1class}>
                        <div className="col-sm-2 col-md-5 issue-imgs">
                            <figure className="compare">
                                <img src={projects[this.state.Ind].issue1org} className={projects[this.state.Ind].issue1class} alt="Issue 1 Original" />
                            </figure>
                            <figure className="compare">
                                <img src={projects[this.state.Ind].issue1live} className={projects[this.state.Ind].issue1class} alt="Issue 1 Project" />
                            </figure>
                        </div>

                        <div className="col-sm-10 col-md-7 card-body">
                            <h3 className="card-title">{projects[this.state.Ind].issue1title}</h3>
                            {projects[this.state.Ind].issue1note}
                        </div>
                    </div>
                </div>

                <div className="card issue-detail detail2">
                    <div className={projects[this.state.Ind].issueimgs2class}>
                        <div className="col-sm-2 col-md-5 issue-imgs">
                            <figure className="compare">
                                <img src={projects[this.state.Ind].issue2org} className={projects[this.state.Ind].issue2class} alt="Issue 2 Original" />
                            </figure>
                            <figure className="compare">
                                <img src={projects[this.state.Ind].issue2live} className={projects[this.state.Ind].issue2class} alt="Issue 2 Project" />
                            </figure>
                        </div>

                        <div className="col-sm-10 col-md-7 card-body">
                            <h3 className="card-title">{projects[this.state.Ind].issue2title}</h3>
                            {projects[this.state.Ind].issue2note}
                        </div>
                    </div>
                </div>

                <div className="card issue-detail detail3">
                    <div className={projects[this.state.Ind].issueimgs3class}>
                        <div className="col-sm-3 col-md-5 issue-imgs">
                            <figure className="compare">
                                <img src={projects[this.state.Ind].issue3org} className={projects[this.state.Ind].issue3class} alt="Issue 3 Original" />
                            </figure>
                            <figure className="compare">
                                <img src={projects[this.state.Ind].issue3live} className={projects[this.state.Ind].issue3class} alt="Issue 3 Project" />
                            </figure>
                        </div>

                        <div className="col-sm-10 col-md-7 card-body">
                            <h3 className="card-title">{projects[this.state.Ind].issue3title}</h3>
                            {projects[this.state.Ind].issue3note}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row project-close">
                <h2 className="col-12">More Info</h2>
                <div className="col-md-5 more-info">
                    <h4>Additional Notes</h4>
                    <p><em>updates/issues noted but not addressed in the project</em></p>
                    {projects[this.state.Ind].addnotes}
                </div>
                <div className="col-md-4 project-tools">
                    <h4>Tools Used</h4>
                    <p><em>tools/resources used in building this project</em></p>
                    {projects[this.state.Ind].projecttools}
                </div>
                <div className="col-md-3 contact-section">
                    <h4>Contact Me</h4>
                    <ul className="contact-info-list">
                        <li>{adrienneAEWEmail}</li>
                        <li>{adrienneContactForm}</li>
                        <li>{adrienneAEWPortfolio}</li>
                        <li>{adrienneAEWDesigner}</li>
                    </ul>
                </div>
            </div>
                
        </main>
        )
    }
}