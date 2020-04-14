import React from 'react'
import classes from './MainBlock.module.css'
import ReactAnime from 'react-animejs'
const {Anime} = ReactAnime

const MainBlock=(props)=>(
    <div className={classes.MainBlock}>
        <Anime
            initial={[
                {
                  targets: "#Box",
                  keyframes:[
                      {
                          translateY:-1000
                      },
                      {
                          translateY:50
                      }
                  ],
                  easing: "easeInOutQuint",
                  duration:4000,
                }
              ]}   
        >
            <div id="Box" className={classes.Title}>Hey I Am Jainam Mehta</div>
        </Anime>
        <Anime
            initial={[
                {
                  targets: "#Box2",
                  keyframes:[
                      {
                          translateX:-1500
                      },
                      {
                          translateX:50
                      }
                  ],
                  easing: "easeInOutQuint",
                  duration:5000,
                }
              ]}   
        >
         <div id="Box2" className={classes.Tag}>I turn Coffee and Music into efficient Code.</div> 
        </Anime>
    </div>
)

export default MainBlock