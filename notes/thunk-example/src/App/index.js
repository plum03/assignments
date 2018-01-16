import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {getStarships} from '../redux'

class App extends Component {
    componentDidMount() {
        this.props.getStarships();
        // axios.get("https://swapi.co/api/starships/")
        //     .then(response => {
        //         this.props.getStarships(response.data.results);
        //     })
    }

    render() {
        const starships = this.props.starships.map(ship => <h1 key={ship.name}>{ship.name}</h1> )
        return (
            <div>
                {starships}
            </div>
        )
    }
}

// const mapStateToProps = 

// connect getStarship function from redux to the App component
export default connect(null, {getStarships})(App);
