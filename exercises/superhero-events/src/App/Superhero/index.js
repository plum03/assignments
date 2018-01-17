import React, { Component } from 'react'

export default class Superhero extends Component {
    constructor(props) {
        super(props);
        this.superhero = {...props};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.superhero.displayCatchphrase(this.superhero.catchphrase)
    }


    render() {

        return (
            <div>
                <h1 onClick={this.handleClick}>{this.superhero.name}</h1>
            </div>
        )
    } 
}
