import React, {Component} from 'react';
import {connect} from "react-redux";

import './Question.css'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {}
        }
    }
    componentDidMount() {}
    render() {
        let {loading, data} = this.props;
        let {questionId} = this.props.match.params;
        let currentQ = data.filter((question) => question.id.toString() === questionId)[0];

        return (loading
            ? <div>
                    ...Loading
                </div>
            : <div>
                <div className="question">
                    <h2>{currentQ.question}</h2>
                    <div className="options">
                        <h3>{currentQ.option1}</h3>
                        <h3>{currentQ.option2}</h3>
                        <h3>{currentQ.option3}</h3>
                        <h3>{currentQ.option4}</h3>
                    </div>

                </div>
            </div>)
    }
}

export default connect(state => state.questions, {})(Question);
