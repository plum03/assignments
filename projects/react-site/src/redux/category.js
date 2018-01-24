import axios from 'axios'
import React from 'react'

const catUrl = "https://qriusity.com/v1/categories/?name="

export function getCategory(category) {
    return dispatch => {
        axios
            .get(catUrl + category)
            .then((response) => {
                let results = response.data;
                dispatch({
                    type: "GET_CATEGORIES",
                    category: results
                })
            })
    }

}

export default function catReducer(category = [], action) {
    switch(action.type) {
        case "GET_CATEGORY":
            return {
                category: action.category
            }
        default:
            return category
    }
}