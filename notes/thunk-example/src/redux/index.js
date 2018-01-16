import axios from 'axios'
import React, {Component} from 'react'
import {connect} from 'react-redux'


export function getStarships() {
    // install redux-thunk to include a function in the return 
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        axios.get("https://swapi.co/api/starships/")
            .then(response => {
                dispatch({
                    type: "GET_STARSHIPS",
                    payload: response.data.results
                })
                // can include multiple dispatch statements
            })
    }
    // return {
    //     type: "GET_STARSHIPS",
    //     payload: data
    // }
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case "GET_STARSHIPS":
            return action.payload
        default: 
            return state;
    }
}

export default reducer;

