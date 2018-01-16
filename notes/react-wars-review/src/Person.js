import React, { Component } from 'react'
import axios from 'axios'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
        .then((response, i) => {
            this.setState({
                person: response.data
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`https://swapi.api.co/people/${nextProps.match.params.id}`)
            .then()(response => {
                this.setState({
                    person: response.data
                })
            })
        }
    }

    


    render() {
        return (
            <div>
                I'm the Person component
            </div>
        )
    }
}
