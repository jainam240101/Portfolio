import React from 'react'
import classes from './Project.module.css'

const Project=(props)=>{
    const tags=props.list
    return(
        <div className={classes.Project}>
            <p className={classes.Title}>{props.title}</p>
            <p className={classes.Description}>{props.description}</p>
            <ul className={classes.Mainlist}>
                {tags.map(element=>(
                    <li className={classes.list}>{element}</li>
                ))}
            </ul>
            <p className={classes.github}>GITHUB</p>
        </div>
    )
}

export default Project
