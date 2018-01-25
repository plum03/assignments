import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link, Switch, Route} from 'react-router-dom'

import Question from './Question'

import {getQuestions} from '../../redux/question'

class Questions extends Component {

    componentDidMount() {
        let catId = this.props.match.params.categoryId;
        this
            .props
            .getQuestions(catId);
    }

    componentWillReceiveProps(nextProps) {
        let {categoryId} = this.props.match.params;
        let nextCatId = nextProps.match.params.categoryId;
        if (categoryId !== nextCatId) 
            this.props.getQuestions(nextCatId);
        }
    
    render() {
        let {loading, data} = this.props.questions;
        // console.log(this.props) const myQ = questions.questions console.log(loading)

        const questionList = data.map((question, i) => {
            let {categoryId} = this.props.match.params;
            return <Link key={question.id} to={`/${categoryId}/${question.id}`}>{question.question}</Link>
        });

        return (loading
            ? <div>
                    ...Loading
                </div>
            : <div>
                {questionList}
                <Switch>
                    <Route path="/:categoryId/:questionId" component={Question}></Route>
                </Switch>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {questions: state.questions}
}

export default connect(mapStateToProps, {getQuestions})(Questions)