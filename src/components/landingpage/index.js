import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import TextLoop from 'react-text-loop';

class Landing extends Component{
    render(){
        return(
            <main className="home-div" style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={7}>
                        <div className="hero-text">
                            <h1>Bill Weisberger</h1>
                            <div className='full-stack-div'>
                                <h2>
                                    <TextLoop interval={[3000, 1000, 1000]}>
                                        <span>FULL STACK WEB DEVELOPER</span>
                                        <span>LIFELONG LEARNER</span>
                                        <span>PROBLEM SOLVER</span>
                                        <span>FULL STACK WEB DEVELOPER</span>
                                        <span>SCIENCE TEACHER</span>
                                        <span>MOVIE BUFF</span>
                                    </TextLoop>    
                                </h2>
                            </div>
                            <div className="social-media-links">
                                {/* linkedin */}
                                <a href="linkedin.com/in/billweisberger" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* github */}
                                <a href="github.com/bweisberger" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                            <hr/>
                            <p>HTML5/CSS3 | Javascript | React | NodeJS | MongoDB | Python | SQL</p>

                            
                        </div>                      
                    
                    </Cell>
                    <Cell col={5}>
                        <div className="hero-img-container">
                            <img className="hero-img"
                            src="images/Weisberger.png"
                            alt="Bill Weisberger"
                            />
                        </div>
                    </Cell>
                </Grid>

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
            </main>
        )
    }
}
export default Landing