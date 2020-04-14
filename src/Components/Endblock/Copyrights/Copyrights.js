import React from 'react'
import classes from './Copyrights.module.css'

const Copyrights=(props)=>(
    <div className={classes.copyrights}>
        <p className={classes.text}>© 2020 Jainam Mehta. Find A Bug Submit a Issue on <span className={classes.mail}>jainamm47@gmail.com</span></p>
    </div>
)

export default Copyrights