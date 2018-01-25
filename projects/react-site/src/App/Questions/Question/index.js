import React, {Component} from 'react';
import {connect} from "react-redux";

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
                <h2>{currentQ.option1}</h2>
                <h2>{currentQ.option2}</h2>
                <h2>{currentQ.option3}</h2>
                <h2>{currentQ.option4}</h2>
            </div>)
    }
}

export default connect(state => state.questions, {})(Question);
