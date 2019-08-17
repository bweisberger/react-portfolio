import React, {Component} from 'react'
import {Tab, Tabs, Grid, Cell} from 'react-mdl'
import ProjectCard from '../../components/project_cards'

class Projects extends Component{
    constructor(){
        super();
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <ProjectCard 
                        title="React Project 1" 
                        url="#" 
                        text="This project uses react"
                    />

                    {/* Project 2 */}
                    <ProjectCard 
                        title="React Project 2" 
                        url="#" 
                        text="This project uses react"
                    />

                    {/* Project 3 */}
                    <ProjectCard 
                        title="React Project 3" 
                        url="#" 
                        text="This project uses react"
                    />
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <ProjectCard 
                        title="Node Project 1" 
                        url="#" 
                        text="This project uses NodeJS"
                    />

                    {/* Project 2 */}
                    <ProjectCard 
                        title="Node Project 2" 
                        url="#" 
                        text="This project uses NodeJS"
                    />

                    {/* Project 3 */}
                    <ProjectCard 
                        title="Node Project 3" 
                        url="#" 
                        text="This project uses NodeJS"
                    />
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <ProjectCard 
                        title="jQuery Project 1" 
                        url="#" 
                        text="This project uses jQuery"
                    />

                    {/* Project 2 */}
                    <ProjectCard 
                        title="jQuery Project 2" 
                        url="#" 
                        text="This project uses jQuery"
                    />

                    {/* Project 3 */}
                    <ProjectCard 
                        title="jQuery Project 3" 
                        url="#" 
                        text="This project uses jQuery"
                    />
                </div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <ProjectCard 
                        title="API Project 1" 
                        url="#" 
                        text="This project uses APIs"
                    />

                    {/* Project 2 */}
                    <ProjectCard 
                        title="API Project 2" 
                        url="#" 
                        text="This project uses APIs"
                    />

                    {/* Project 3 */}
                    <ProjectCard 
                        title="API Project 3" 
                        url="#" 
                        text="This project uses APIs"
                    />
                </div>
            )
        }
    }
    
    render(){
        return(
            <div className='category-tabs'>
                <Tabs className='project-tabs' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                    <Tab >React</Tab>
                    <Tab>jQuery</Tab>
                    <Tab>NodeJS/MongoDB</Tab>
                    <Tab>API Calls</Tab>
                </Tabs>
                <Grid className='projects-body'>
                    <Cell col={12}>
                        <div className="projects-content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects