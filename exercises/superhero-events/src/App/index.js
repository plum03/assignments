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
        this.handleClick = this.handleClick.bind(this);
    }

    display(i) {
        alert(this.state.superheroes[i].catchphrase);
    }

    handleClick(e) {
        
        this.setState((prevState) => {
            let i = e.target.index;
            return {
                catchphrase: prevState.catchphrase === "" ? this.state.superheroes[i].catchphrase : ""
            }
        })

    }

    render() {
        let {superheroes, catchphrase} = this.state;
        return (
            <div>
                {superheroes.map((superhero, i) => {
                    return (
                        <Superhero name="hero" key={i + superhero.name} {...superhero} index={i} display={this.display} onClick={this.handleClick}></Superhero>
                    )
                })}
            </div>
        )
    }
}
