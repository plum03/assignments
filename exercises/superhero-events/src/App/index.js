import React, { Component } from 'react'
import superheroes from '../shared/superheroes.json'
import Superhero from './Superhero'

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.displayCatchphrase = this.displayCatchphrase.bind(this);

    }

    displayCatchphrase(str) {
        alert(str);
    }


    render() {
        // let {superheroes} = this.state;
        return (
            <div>
                {superheroes.map((superhero, i) => {
                    return (
                        <Superhero key={i + superhero.name} {...superhero} index={i} displayCatchphrase={this.displayCatchphrase}></Superhero>
                    )
                })}
            </div>
        )
    }
}
