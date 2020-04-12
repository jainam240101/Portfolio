import React from 'react'
import classes from './Projects.module.css'
import Project from './Project/Project'

const Projects=(props)=>(
    <div className={classes.Container} >
        <h2 className={classes.heading}>Projects</h2>
        <div className={classes.Projects}>
            <Project title="Mood Prediction System"
                     list={["Deep Learning","Artificial Intelligence","Tensorflow","CV2"]}
                    description="This Deep learning application just reads your facial expression and predicts your mood i used FER2013 from kaggle. I used Flask to put it on web so that even a person with less configurations of comp can run it."/>
            <Project title="Mood Prediction System"
                     list={["Deep Learning","Flask","Tensorflow","CV2"]}
                    description="This Deep learning application just reads your facial expression and predicts your mood i used FER2013 from kaggle. I used Flask to put it on web so that even a person with less configurations of comp can run it."/>
            
        </div>
        <div className={classes.Projects}>
            <Project title="Mood Prediction System"
                     list={["Deep Learning","Flask","Tensorflow","CV2"]}
                    description="This Deep learning application just reads your facial expression and predicts your mood i used FER2013 from kaggle. I used Flask to put it on web so that even a person with less configurations of comp can run it."/>
            <Project title="Mood Prediction System"
                     list={["Deep Learning","Flask","Tensorflow","CV2"]}
                    description="This Deep learning application just reads your facial expression and predicts your mood i used FER2013 from kaggle. I used Flask to put it on web so that even a person with less configurations of comp can run it."/>
            
        </div>
    </div>
)

export default Projects