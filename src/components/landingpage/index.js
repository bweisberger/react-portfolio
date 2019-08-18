import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import TextLoop from 'react-text-loop';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
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
                                        <span></span>
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
            </div>
        )
    }
}
export default Landing