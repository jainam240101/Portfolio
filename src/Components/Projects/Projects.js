import React from 'react'
import classes from './Projects.module.css'
import Project from './Project/Project'

const Projects=(props)=>(
    <div className={classes.Container} >
        <h2 className={classes.heading}>Projects</h2>
        <div className={classes.Projects}>
            <Project title="Mood Prediction System"
                    link="https://github.com/jainam240101/Mood-Prediction"
                     list={["Deep Learning","Artificial Intelligence","Tensorflow","CV2"]}
                    description="This Deep learning application just reads your facial expression and predicts your mood i used FER2013 from kaggle. I used Flask to put it on web so that even a person with less configurations of comp can run it."/>
            <Project title="e-Certificate Generator"
                     list={["Python","JavaFX"]}
                     link="https://github.com/jainam240101/e-Certificate-Generator"
                    description="This is a unique application where it removes out the tedious tasks of creating multiple certificates.In this user has to take a excel file and empty template and select which column data of excel to put and than customize it and than it creates multiple certificates at desired location."/>
            
        </div>
        <div className={classes.Projects}>
            <Project title="Developer Student Club Website"
                    link="https://github.com/jainam240101/DSC_Website_Progate"
                     list={["Node JS","HTML","CSS","AnimeJS"]}
                    description="My friend and I created a website for our Developer Student CLub which had all the details related to the club. We used MongoDb for storing data which was read by a REST API in our backend and than rendered to the frontend using sockets. I worked as a fullstack engineer in this and won a Webathon held at my college. "/>
            <Project title="Burger Applicatiom"
                    link="https://github.com/jainam240101/Burger-Application"
                     list={["ReactJS","Redux","Firebase"]}
                    description="This is a Multi paged application where users can create a customized burger and than submit an order. I also used Authentication in this to prevent display of personal data of a user to other users."/>
            
        </div>
    </div>
)

export default Projects