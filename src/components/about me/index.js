import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class About extends Component{
    render(){
        return(
            <Grid className="aboutme-grid">
                <Cell className='left-col' col={8}>
                    <h2 className="about-me-intro">Hi, I'm Bill</h2>
                    <p></p>
                </Cell>
                <Cell className='right-col' col={4}>
                    Right Side
                </Cell>
            </Grid>
        )
    }
}

export default About