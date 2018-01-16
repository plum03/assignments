import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get("https://swapi.co/api/people/")
            .then((response) => {
                this.setState({
                    people: response.data.results
                })
            })
            .catch()
    }

    render() {
        const peopleList = this.state.people.map((person, index) => 
            <Link 
                style={{display: "black"}}
                to={`/person/${index + 1}`}
                key={index + person.name}>{person.name}
            </Link>
            )
        
        return (
            <div>
                {peopleList}
            </div>
        )
    }
}