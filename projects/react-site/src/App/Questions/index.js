import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import {getQuestions} from '../../redux/question'

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        let catId = this.props.match.params.categoryId
        this.props.getQuestions(catId)
        console.log(catId)
    }

    componentWillReceiveProps() {
       this.setState = {
           loading: false
       }
       
    }

    render() {
        let {loading} = this.state
        let {questions} = this.props.questions
        console.log(questions)
        console.log(loading)
        return (
            loading ?
            <div>
                {questions.map((question, i) => {
                    return (
                        <Link to=""{...question}></Link>
                    )
                    
                })}
                
            </div>
            :
            <div>Please wait ... your trivia questions are loading</div>
        )      
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, {getQuestions})(Questions)