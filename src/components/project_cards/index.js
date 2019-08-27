import React from 'react'
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

const ProjectCard = (props) => {

    return(
        
            <Card href={props.href1} shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <a href={props.href1}><CardTitle style={{color: 'white', height: '176px', background:`url(${props.url}) center/cover`}}>
                    {props.title}
                </CardTitle></a>
                <CardText>
                    {props.text}
                </CardText>
                <CardActions border>
                    <Button target="_blank" href={props.href2} colored>Github</Button>
                    {/* <Button href="" colored>LiveDemo</Button> */}
                </CardActions>
                <CardMenu style={{color: 'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        
    )
}


export default ProjectCard;