import React, {Component} from 'react'
// import {Grid, Cell} from 'react-mdl'
import {Document, Page} from 'react-pdf'
// import Education from '../education'
// import Experience from '../experience'
// import Skills from '../skills'

class Resume extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         pdf: ''
    //     }
    // }
    // onDocumentLoadSuccess
    render(){
        return(
            <div>
                {/* <Document 
                file='Bill_Weisberger_Resume.pdf'
                onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pdf=''/>
                </Document> */}
                {/* <Grid>
                    <Cell style={{textAlign: 'center', background: 'white'}}col={4}>
                        <div style={{textAlign:'center', background: 'white'}}>
                            <img 
                            src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-15-512.png"
                            alt='avatar'
                            style={{height: '200px', background: 'turquoise', marginTop: '3rem'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '1em'}}>Bill Weisberger</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{margin: 'auto', borderTop: '3px solid turquoise', width: '50%'}}/>
                        <p>Lorem ipsum dolor emet. This is dummy text to fill space. Blah Blah Blah....</p>
                        <hr style={{margin: 'auto', borderTop: '3px solid turquoise', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>(303) 332-4144</p>
                        <h5>Email</h5>
                        <p>bill.weisberger@gmail.com</p>
                        <h5>Web</h5>
                        <a style={{color: 'black', textDecoration: 'none'}}href='billweisberger.com'><p>billweisberger.com</p></a>
                        <hr style={{margin: 'auto', borderTop: '3px solid turquoise', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2004} 
                            endYear={2008}
                            schoolName={'University of Virginia'}
                            schoolDescription={'BA in Psychology, minor in Biology'}
                        />
                        <Education 
                            startYear={2011} 
                            endYear={2013}
                            schoolName={'University of Colorado - Boulder'}
                            schoolDescription={'MA in Education'}
                        />
                        <hr style={{borderTop: '3px solid white'}}/>

                        <h2> Experience </h2>

                        <Experience 
                            startYear={2013} 
                            endYear={2017}
                            jobName={'High School Science Teacher'}
                            jobDescription={'description'}
                        />
                        <hr style={{borderTop: '3px solid white'}}/>
                        <h2>Skills</h2>
                        <Skills skill={'Javascript'} progress={80}/>
                        <Skills skill={'NodeJS'} progress={60}/>
                        <Skills skill={'MongoDB'} progress={80}/>
                        <Skills skill={'HTML5/CSS3'} progress={80}/>
                        <Skills skill={'React'} progress={80}/>
                        <Skills skill={'Python'} progress={80}/>
                        <Skills skill={'SQL'} progress={80}/>


                    </Cell>
                </Grid> */}
            </div>
        )
    }
}

export default Resume