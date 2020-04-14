import React from 'react'
import classes from './Background.module.css'
import Particles from 'react-particles-js'


const Background=(props)=>{
    return(
        <div className={classes.background}>
            <Particles 
                className={classes.canvas}
                params={{ 
                    particles: { 
                        number: { 
                        value: 150, 
                        density: { 
                            enable: true, 
                            value_area: 900, 
                        } 
                        },
                        'line_liked':{
                            "enable":true   
                        },
                        'move': {
                            'enable': true,
                            'speed': 2,
                            'direction': 'none',
                            'random': false,
                            'straight': false,
                            'out_mode': 'out',
                            'bounce': false,
                            'attract': {
                              'enable': false,
                              'rotateX': 600,
                              'rotateY': 1200
                            }
                          } 
                    },
                    "interactivity": {
                        "events": {
                            'resize':true,
                            'repulse': {
                                'distance': 200,
                                'duration': 0.4
                              },
                              'push': {
                                'particles_nb': 4
                              },
                              'remove': {
                                'particles_nb': 2
                              }
                        }
                    }
                }} 
            /> 
        </div>
    )
}

export default Background