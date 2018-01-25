import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Question from './Question'

import {getQuestions} from '../../redux/question'

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        window.addEventListener("click", (e) => {
            let catId = this.props.match.params.categoryId
            this.props.getQuestions(catId)
            })
        
        // console.log(catId)
    }

    componentWillReceiveProps(nextProps) {
        this.setState = {
            loading: false
        }
    }

    componentWillUnmount() {
       window.removeEventListener("click")
    }

    render() {
        let {loading} = this.state
        let {questions} = this.props
        // console.log(this.props)
        console.log(questions)
        // const myQ = questions.questions
        // console.log(loading)
        
            const questionList = questions.map((question, i) => {
                return <Question onClick={this.componentDidMount} {...question} question={question.question} option1={question.option1} />
            });
        
        

        return (
            <div>
                {questionList}
                <p>hi</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {questions: state.questions}
}

export default connect(mapStateToProps, {getQuestions})(Questions)