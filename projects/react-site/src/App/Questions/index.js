import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {getQuestions} from '../../redux/question'

class Questions extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getQuestions()
    }


    render() {

        return (
            <div>
                RENDERING ...
            </div>
        )      
    }
}

export default Questions;