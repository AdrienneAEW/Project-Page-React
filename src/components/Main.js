import React, { Component } from 'react';
import projects from './Projects';
import logos from './Logos';
import '../App.css';



const Specs = (props) => {
    const specifications = props.specsData.map((spec, index) => {
        return (
            <div key={index}>
                <div><strong>Fonts:</strong> {spec.fonts}</div>
                <div><strong>Icons:</strong> {spec.icons}</div>
                <div><strong>Images:</strong> {spec.images}</div>
                <div><strong>Colors:</strong> &nbsp;{spec.colors}</div>
            </div>
        )
    })
    return <div className="project-specs"><h3>Project Specs</h3> {specifications}</div>
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
            origfull: 'https://1drv.ms/u/s!AsShLFW0DLmuhMA-5Ixno-jFkHC7NA',
            livefull: 'https://1drv.ms/u/s!AsShLFW0DLmuhMA9dqIdMwYlV3IBZw'
        })
    }

    projectThree() {
        this.setState({
            Ind: 2,
            origfull: 'https://1drv.ms/u/s!AsShLFW0DLmuhotd0Z_S5-r2c_d2AQ',
            livefull: 'https://1drv.ms/u/s!AsShLFW0DLmuhote5Ad3nBqjX1bB5Q'
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
                        <img src={logos[1].img} className="logo-img" alt={logos[1].alt} /> &nbsp;
                        <span className="logo-text"> {logos[1].site}</span>
                    </a>
                </figure>
            </header>
            <div className="row project-nav">
                <h5 className="col-1">Projects: </h5>
                <div className="col-5 btn-group project-btn-container" role="group" aria-label="Projects Menu">
                    <button type="button" className="btn btn-outline-dark btn-group-small project-btn" aria-label={projects[0].navtitle} aria-pressed="true" title={projects[0].navtitle} onClick={this.projectOne}>{projects[0].prjbtn}</button>
                    <button type="button" className="btn btn-outline-dark btn-group-small project-btn" title={projects[1].navtitle} aria-label={projects[1].navtitle} aria-pressed="true" onClick={this.projectTwo}>{projects[1].prjbtn}</button>
                    <button type="button" className="btn btn-group-small btn-outline-dark btn-group-small project-btn" title={projects[2].navtitle} aria-label={projects[2].navtitle} aria-pressed="true" onClick={this.projectThree}>{projects[2].prjbtn}</button>
                </div>
            </div>
            <div className="row project-open">
                <div className="col-4 open-left">
                    <figure className="project-img-container">
                        <a href={this.state.origfull} title="View this image at full size." aria-label="View the full size image.">
                            <img src={projects[this.state.Ind].imgorg} className="project-img project-org-img img-thumbnail" alt={projects[this.state.Ind].altorg} />
                        </a>
                        <figcaption className="project-caption">
                            <a href={projects[this.state.Ind].original} title={projects[this.state.Ind].titleorg} alt={projects[this.state.Ind].altorg} aria-label="Visit the original website.">{projects[this.state.Ind].captionorg}</a>
                        </figcaption>
                    </figure>

                    <figure className="project-img-container">
                        <a href={this.state.livefull} title="View the image at full size." aria-label="View the full size.">
                            <img src={projects[this.state.Ind].imglive} className="project-img project-live-img img-thumbnail" alt={projects[this.state.Ind].altlive} />
                        </a>
                    <figcaption className="project-caption">
                        <a href={projects[this.state.Ind].live} title={projects[this.state.Ind].titlelive} aria-label="Visit the live project page.">{projects[this.state.Ind].captionlive}</a>
                    </figcaption>
                </figure>
                </div>
                <div className="col-8 open-right">
                    <h2>About This Project &mdash; {projects[this.state.Ind].name}</h2>
                    {projects[this.state.Ind].description}
                    <Specs specsData={projects[this.state.Ind].specs} />
                </div>
            </div>

            <div id="project-issues" className="issue-details">
                <h2>Issues and Solutions</h2>
                <div className="card issue-detail detail1">
                    <div className="row">
                        <div className="col-sm-2 col-md-4">
                            <figure className={projects[this.state.Ind].issue1org}></figure>
                            <figure className={projects[this.state.Ind].issue1live}></figure>
                        </div>

                        <div className="col-sm-10 col-md-8 card-body">
                            <p className="card-title">{projects[this.state.Ind].issue1title}</p>
                            <p className="card-text">{projects[this.state.Ind].issue1note}</p>
                        </div>
                        </div>
                </div>

                <div className="card issue-detail detail2">
                    <div className="row">
                        <div className="col-sm-2 col-md-5">
                            <figure className={projects[this.state.Ind].issue2org}></figure>
                            <figure className={projects[this.state.Ind].issue2live}></figure>
                        </div>

                        <div className="col-sm-10 col-md-7 card-body">
                            <p className="card-title">{projects[this.state.Ind].issue2title}</p>
                            <p className="card-text">{projects[this.state.Ind].issue2note}</p>
                        </div>
                        
                    </div>

                </div>

                <div className="card issue-detail detail3">

                    <div>
                        <div className="row">
                            <div className="col-sm-2 col-md-5">
                                <figure className={projects[this.state.Ind].issue3org}></figure>
                                <figure className={projects[this.state.Ind].issue3live}></figure>
                            </div>

                            <div className="col-sm-10 col-md-7 card-body">
                                <p className="card-title">{projects[this.state.Ind].issue3title}</p>
                                <p className="card-text">{projects[this.state.Ind].issue3note}</p>
                            </div>
                        </div>
                    </div>
                    

                    
                </div>
            </div>

            <div className="row project-close">
                <h2 className="col-12">More Info</h2>
                <div className="col-md-4 more-info">
                    <h3>Additional Notes</h3>
                    <p>{projects[this.state.Ind].addnotes}</p>
                </div>
                <div className="col-md-4 prj-cta">
                    <h3>Call To Action</h3>
                    <p>{projects[this.state.Ind].prjcta}</p>
                </div>
                <div className="col-md-4 contact-section">
                    <h3>Contact Me</h3>
                    <ul className="contact-info-list">
                        <li><i className="bi bi-envelope-open-fill"></i> Email</li>
                        <li><i className="bi bi-book-half"></i> Portfolio</li>
                        <li><i className="bi bi-hdd-stack-fill"></i> Contact Form</li>
                    </ul>
                </div>
            </div>
                
        </main>
        )
    }
}