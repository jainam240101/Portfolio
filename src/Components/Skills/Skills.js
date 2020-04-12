import React from 'react'
import classes from './Skills.module.css'

const Skills=(props)=>{
    var attachedclasses=[classes.Container,classes.Close]
    if(props.show){
        attachedclasses=[classes.Container,classes.Open]
    }
    return <div className={attachedclasses.join(' ')}>
        <div className={classes.div1}><p className={classes.text}>Machine Learning</p></div>
        <div className={classes.div2}><p className={classes.text}>ReactJS</p></div>
        <div className={classes.div3}><p className={classes.text}>NodeJS</p></div>
        <div className={classes.div4}><p className={classes.text}>REST API</p></div>
    </div>
}

export default Skills