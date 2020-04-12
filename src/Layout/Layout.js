import React, { Component } from 'react'
import MainBlock from '../Components/MainBlock/MainBlock'
import About from '../Components/About/About'
import Projects from '../Components/Projects/Projects'


class Layout extends Component{
    render(){
        return(
            <div>
                <MainBlock/>
                <About/>
                <Projects/>
            </div>

        )
    }
}

export default Layout
