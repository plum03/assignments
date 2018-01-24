import axios from 'axios'
import React from 'react'

export function getQuestions(catId) {
    return dispatch => {
        axios.get()
        .then((response) => {
            dispatch({
                type: "GET_QUESTIONS",
                questions: response.data
            })
        })

    }
}

export default function questReducer(questions = null, action) {
    switch(action.type) {
        case "GET_QUESTIONS":
            return {
                questions: action
            }
        default:
            return questions
    }
}