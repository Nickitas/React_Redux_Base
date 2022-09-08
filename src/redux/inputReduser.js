import { INPUT_TEXT } from "./types"

const initialState = {
    text: ''
}

export const inputReduser = (state = initialState, action) => {
    console.log('input text Reduser > ', action)

    switch(action.type) {
        case INPUT_TEXT:
            return {
                ...state,
            text: action.text
            }
        default:
            return state
    }
}