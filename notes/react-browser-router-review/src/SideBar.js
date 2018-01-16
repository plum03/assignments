import React, { Component } from 'react'

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
        const peopleList = this.state.people.map((person, index) => <h3 key={index + person.name}>{person.name}</h3>)
        <Link to=""
        return (
            <div>
                {peopleList}
            </div>
        )
    }
}
