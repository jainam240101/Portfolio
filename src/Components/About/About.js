import React, { Component } from 'react'
import classes from './About.module.css'
import Skills from '../Skills/Skills'

class About extends Component{
    state={
        skills:false
    }
    render(){
        return(
            <div className={classes.Container}>
                <div id="About" className={classes.About}>
                    <h3 className={classes.Heading}>About Me</h3>
                    <p className={classes.Para}>I am a self taught coder and when it comes to Coding I start syncing my hands and brain to write efficient code.
                                                I started my coding journey from 10th Std and I was really fascinated to see things in action,Thrilled with excitment I started different
                                                languages and increasing my Coding Skills.<br/><br/>Technology has always fascinated me so I have a goal of never stop learning cause everyday 
                                                new things come into Open Source Market.I have a goal of developing new things that just takes out the burden of doing unimportant things.
                                                I always have liked creating algorithms and thats why I try to work as a Backend Engineer and creating REST APIs, handling databases,etc.
                                                Later I started my journey of a Full Stack Developer by learning React and was fascinated by all the features it has.
                                                <br/>  
                                                I believe in working out of my comfort zone and trying new things cause I have a explorers' mindset. I am very adaptive to new technologies
                                                cause its my passion to explre new technologies. When it comes to work I put all my dedication towards it and build new things even if I have to stay
                                                up night and day to build it.
                                                </p>
                    <button className={classes.btn}
                            onMouseEnter={()=>{this.setState({skills:true})}}
                            onMouseLeave={()=>{this.setState({skills:false})}}>Technical Skills</button>
                </div>
                <Skills show={this.state.skills}/>
            </div>
        )
    }
}


export default About