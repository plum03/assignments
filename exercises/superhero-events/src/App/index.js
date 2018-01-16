import React, { Component } from 'react'
import superheroes from '../shared/superheroes.json'
import Superhero from './Superhero'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroes: superheroes,
            catchphrase: ""
        }
        this.display = this.display.bind(this);
    }

    display(i) {
        let index = i.target.index
        this.setState((prevState, i) => {
            return {
                catchphrase: prevState.catchphrase === "" ? superheroes[i].catchphrase : ""
            }
        })
        
    }

    render() {
        let {superheroes, catchphrase} = this.state;
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
