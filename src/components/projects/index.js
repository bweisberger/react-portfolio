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
                        title="React Portfolio" 
                        href1='www.billweisberger.com/react-portfolio'
                        href2="http://www.github.com/bweisberger/react-portfolio" 
                        url="/images/ReactPortfolio.png" 
                        text="Current Page"
                        href="www.billweisberger.com"
                    />

                    <ProjectCard 
                        title="FilmFetch" 
                        url="/images/reactjs.png" 
                        text="Coming Soon: API Calls, Python with Flask, and React"
                    />

                    
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <ProjectCard 
                        title="Down To Play"
                        href1='http://down-to-play.herokuapp.com'
                        href2='https://github.com/ssmich/DTP'
                        url="/images/DTP_Image.png" 
                        text="This project uses NodeJS, Express, and Bootstrap"
                    />

                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <ProjectCard 
                        title="Homer's Day Off" 
                        href1='https://billweisberger.com/Simpsons-Tamagotchi'
                        href2="https://github.com/bweisberger/Simpsons-Tamagotchi"
                        url="/images/Simpsons_Game.png" 
                        text="This project uses jQuery, Javascript, HTML5 and CSS3"
                    />

                    {/* Project 2 */}
                    <ProjectCard 
                        title="Minimalist Megaman" 
                        href1="https://billweisberger.com/Game-Project"
                        href2='https://github.com/bweisberger/Game-Project'
                        url="/images/MinimalistMegaman.png" 
                        text="This project uses jQuery, Javascript, HTML5 and CSS3"
                    />
                </div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <ProjectCard 
                        title="Giphy API Project" 
                        href1='https://billweisberger.com/giphy-react-hw'
                        href2='https://github.com/bweisberger/giphy-react-hw'
                        url="/images/reactjs.png" 
                        text="This project uses APIs to search for gifs based on your search"
                    />

                    {/* Project 2 */}
                    <ProjectCard 
                        title="FilmFetch" 
                        url="/images/reactjs.png" 
                        text="Coming Soon: API Calls, Python with Flask, and React"
                    />

                    {/* Project 3 */}
                    <ProjectCard 
                        title="News API"
                        href1="https://billweisberger.com/sandwich-news" 
                        href2='https://github.com/bweisberger/sandwich-news'
                        url="/images/reactjs.png" 
                        text="This project accesses news about any searched topic using a 3rd party API"
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