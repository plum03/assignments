import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.question}</h1>
                <h2>{this.props.option1}</h2>
            </div>
        )
    }
}

export default Question
