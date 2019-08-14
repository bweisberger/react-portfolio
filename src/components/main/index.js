import React from 'react';
import Landing from '../landingpage'
import Resume from '../resume'
import About from '../about me'
import Contact from '../contact'
import Projects from '../projects'
import {Switch, Route} from 'react-router-dom'

const Main = () => {
    return(
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/aboutme" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
        </Switch>
    )
    
}

export default Main