import React from 'react'
import classes from './Endblock.module.css'
import Contact from './Contact/Contact'
import Copyrights from './Copyrights/Copyrights'

const Endblock=(props)=>{
    return(
        <div className={classes.Container}>
            <Contact/>
            <Copyrights/>
        </div>
    )
}

export default Endblock