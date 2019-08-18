import React from 'react'
import {Grid, Cell} from 'react-mdl'

const About = () =>{
    return(
        <Grid className="aboutme-grid">
            <Cell className='left-col' col={8}>
                <h2 className="aboutme-intro">Hi, I'm Bill</h2>
                <div className='aboutme-img-container'>
                    <img className='aboutme-img'src="images/DSC03328.jpg" alt='Bill Weisberger'/>
                </div>
                <h4>A little bit about me:</h4>
                <p>I love helping people, which is why I worked as a high school science teacher for 6 years.</p>
                <p>I love to learn new skills and build useful things, which is why I became a full stack dev.</p>
                <p>I love my daughter Nora, because she's cute.</p>
                <p>I have been training as a full stack developer for three months - 40 hours a week in class and </p>
            </Cell>
            <Cell className='right-col' col={4}>
                
            </Cell>
        </Grid> 
    )
}

export default About;