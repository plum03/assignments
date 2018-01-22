import axios from 'axios'

import React from 'react'

const catUrl = "https://qriusity.com/v1/categories"

export function getCategories() {
    return dispatch => {
        axios
            .get(catUrl)
            .then((response) => {
                let results = response.data;
                dispatch({
                    type: "GET_CATEGORIES",
                    categories: results
                })
            })
    }

}

export default function catReducer(prevState = {}, action) {
    switch(action.type) {
        case "GET_CATEGORIES":
            return {
                categories: action.categories
            }
        default:
            return prevState
    }
}