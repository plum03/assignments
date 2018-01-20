import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Sidebar from './Sidebar'
import Content from './Content'

export default class App extends Component {

    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <Content></Content>
            </div>
        )
    }
}

