import React, { Component } from 'react'

export default class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
    }
    
    // write add function
    render() {
        let {names} = this.state;
        return (
            <div>
                {/* render form here with add function in props */}
                {/* map through names and make li tags containing name */}
            </div>
        )
    }
}
