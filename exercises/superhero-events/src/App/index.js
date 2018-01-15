import React, { Component } from 'react'
import superheroes from '../shared/superheroes.json'
import Superhero from './Superhero'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroes: superheroes
        }
        this.display = this.display.bind(this);
    }

    display(i) {
        alert(this.state.superheroes[i].catchphrase)
    }

    render() {
        let {superheroes} = this.state;
        return (
            <div>
                {superheroes.map((superhero, i) => {
                    return (
                        <Superhero {...superhero} index={i} onClick={this.display}></Superhero>
                    )
                })}
            </div>
        )
    }
}
