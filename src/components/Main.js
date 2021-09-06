import React, { Component } from 'react';
import projects from './Projects';
import '../App.css';



const Specs = (props) => {
    const specifications = props.specsData.map((spec, index) => {
        return (
            <div key={index}>
                <p>Font Family: {spec.fonts}</p>
                <p>Icons: {spec.icons}</p>
                <p>Images: {spec.images}</p>
                <p>Colors: {spec.colors}</p>
                
            </div>
        )
        
    })

    return <div className="project-specs">Project Specs: {specifications}</div>
}

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Ind: 0,
        }

        this.projectOne = this.projectOne.bind(this)
        this.projectTwo = this.projectTwo.bind(this)
        this.projectThree = this.projectThree.bind(this)
    }

    projectOne() {
        this.setState({
            Ind: 0,
        })
    }

    projectTwo() {
        this.setState({
            Ind: 1,
        })
    }

    projectThree() {
        this.setState({
            Ind: 2,
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
            </header>
            <div className="row project-nav">
                <h5 className="col-1">Projects: </h5>
                <div className="col-5 btn-group project-btn-container" role="group">
                    <button type="button" className="btn btn-outline-dark btn-group-small project-btn" aria-label={projects[0].navtitle} aria-pressed="true" title={projects[0].navtitle} onClick={this.projectOne}>{projects[0].prjbtn}</button>
                    <button type="button" className="btn btn-outline-dark btn-group-small project-btn" title={projects[1].navtitle} aria-label={projects[1].navtitle} aria-pressed="true" onClick={this.projectTwo}>{projects[1].prjbtn}</button>
                    <button type="button" className="btn btn-group-small btn-outline-dark btn-group-small project-btn" title={projects[2].navtitle} aria-label={projects[2].navtitle} aria-pressed="true" onClick={this.projectThree}>{projects[2].prjbtn}</button>

                    
                </div>
            </div>
            <div className="row project-open">
                <div className="col-4 open-left">
                    <figure className="project-img-container">
                        <img src={projects[this.state.Ind].imgorg} className="project-img project-org-img img-thumbnail" title={projects[this.state.Ind].name + projects[this.state.Ind].altorg} alt={projects[this.state.Ind].name + projects[this.state.Ind].altorg} />
                        <figcaption className="project-caption">{projects[this.state.Ind].captionorg}</figcaption>
                    </figure>

                    <figure className="project-img-container">
                    <img src={projects[this.state.Ind].imglive} className="project-img project-live-img img-thumbnail" title={projects[this.state.Ind].name + projects[this.state.Ind].altlive} alt={projects[this.state.Ind].name + projects[this.state.Ind].altlive} />
                    <figcaption className="project-caption">{projects[this.state.Ind].captionlive}</figcaption>
                </figure>
                </div>
                <div className="col-8 open-right">
                    <h2>About {projects[this.state.Ind].name}</h2>
                    <p>Description: {projects[this.state.Ind].description}</p>
                    <Specs specsData={projects[this.state.Ind].specs} />
                    
                </div>
            </div>

            <div className="project-close">
                <div>Add Notes</div>
                <div>Contact Me</div>
            </div>
                
            </main>
        )
    }
}