import axios from 'axios'
import React from 'react'

const rootUrl = "https://qriusity.com/v1/categories/"
const questUrl = "/questions"

export function getQuestions(catId) {
    return dispatch => {
        axios.get(rootUrl + catId + questUrl)
        .then((response) => {
            dispatch({
                type: "GET_QUESTIONS",
                questions: response.data
            })
            // console.log(response.data)
        })
    }
}

export default function questReducer(questions = {}, action) {
    switch(action.type) {
        case "GET_QUESTIONS":
            return {
                questions: action.questions
            }
        default:
            return questions
    }
}