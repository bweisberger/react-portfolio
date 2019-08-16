import React, {Component} from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Bill Weisberger</h2>
                        <img
                        src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-15-512.png"
                        alt="avatar"
                        style={{height: '250px', background: 'turquoise'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I'm always working on something, and always looking for more projects. Hit me up!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2 className="contact-header">Contact Me</h2>
                        <hr/>
                        <img className='contact-info' src='images/contact-infor.png'/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact