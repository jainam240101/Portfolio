import React from 'react'
import { SocialIcon } from 'react-social-icons';
import classes from './Contact.module.scss'

const Contact=(props)=>(
    <div className={classes.Icons}>
        <p className={classes.contact}>Contact Me</p>
        <p className={classes.para}>Connect with me on different Platforms</p>
        <ul className={classes.ul}>
            <li className={classes.li}><SocialIcon url="https://github.com/jainam240101" fgColor="white" bgColor="#2f3640" style={{ height: 100, width: 100 }}/></li>
            <li className={classes.li}><SocialIcon url="https://medium.com/@jainamm47" fgColor="#02b875" bgColor="#2f3640" style={{ height: 100, width: 100 }}/></li>
            <li className={classes.li}><SocialIcon url="https://www.linkedin.com/in/jainam-mehta-2a1b68187/" fgColor="#0077B5" bgColor="#2f3640" style={{ height: 100, width: 100 }}/></li>
            <li className={classes.li}><SocialIcon url="https://www.instagram.com/jainam.py/" fgColor="#405DE6" bgColor="#2f3640" style={{ height: 100, width: 100 }}/></li>
        </ul>
    </div>
)

export default Contact