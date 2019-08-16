import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className="hero-text">
                            <h1>Bill Weisberger</h1>
                            <h2>Full Stack Web Developer</h2>
                            <hr/>
                            <p>HTML5/CSS3 | Bootstrap | Javascript | React | NodeJS | MongoDB | Python | SQL</p>
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
                        </div>
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