import React, { Component } from 'react'

import axios from 'axios'

import Character from './Character'

export default class Sidebar extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Character></Character>
            </div>
        )
    }
}
