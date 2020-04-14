import React, { Component } from 'react'
import Background from '../Components/Background/Background'
import MainBlock from '../Components/MainBlock/MainBlock'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'
import Endblock from '../Components/Endblock/Endblock'


class Layout extends Component{
    render(){
        return(
            <div>
                <Background/>
                <MainBlock/>
                <About/>
                <Projects/>
                <Endblock/>
            </div>

        )
    }
}

export default Layout
