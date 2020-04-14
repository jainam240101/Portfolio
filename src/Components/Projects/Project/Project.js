import React from 'react'
import classes from './Project.module.css'
import { SocialIcon } from 'react-social-icons';

const Project=(props)=>{
    var margin;
    const tags=props.list
    if(Number(props.title.length)===30){
        margin="21%"
    }
    return(
        <div className={classes.Project}>
            <p className={classes.Title} style={{marginLeft:margin}}>{props.title}</p>
            <p className={classes.Description}>{props.description}</p>
            <ul className={classes.Mainlist}>
                {tags.map(element=>(
                    <li className={classes.list}>{element}</li>
                ))}
            </ul>
            <div className={classes.github}><i><SocialIcon url={props.link} fgColor="white" bgColor="#1e272e"/></i></div>
        </div>
    )
}

export default Project
