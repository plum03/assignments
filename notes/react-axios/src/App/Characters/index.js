import React, {Component} from "react";

import Character from "./Character";

import axios from "axios";

// All imports must be defined PRIOR to this step
const swUrl = "https://swapi.co/api/people";

// AXIOS when the component mounts, make get request when the data comes back,
// set state to contain data display data

export default class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }

    // once mounted, will make a get request
    componentDidMount() {
        // Once mounted, make GET request to swUrl
        axios.get(swUrl)
        // If successful GET request, do this:
            .then((response) => {
            let {results} = response.data;
            this.setState({characters: results, loading: false})
        })
        // If unsuccessful GET request, do this:
            .catch((err) => {
            console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })
        })
    }

    render() {
        let {characters, loading, err, errMsg} = this.state;

        return (
            loading ? // use ternary operator to display one message while loading and data set once loaded
                <div>
                    <h1>Loading ... Please wait</h1> 
                </div>
                :

                err ?
                <div>
                    <p>Oops ... something went wrong.</p>
                </div>
                :
                <div>
                    {characters.map((character, index) => {
                        // let {skin_color, name} = character <Character skinColor={skin_color} name =
                        // {name} .... ></Character>
                        return <Character {...character} key={index}></Character>
                        //
                    })}
                </div>)
    }
}