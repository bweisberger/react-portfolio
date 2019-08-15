import React from 'react'
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

const ProjectCard = (props) => {

    return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background:`url(${props.url}) center/cover`}}>
                {props.title}
            </CardTitle>
            <CardText>
                {props.text}
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
    )
}


export default ProjectCard;