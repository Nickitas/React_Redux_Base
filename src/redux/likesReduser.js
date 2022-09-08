import { INCREMENT, DECREMENT } from "./types"

const initialState = {
    likes: 0
}


export const likesReduser = (state = initialState, action) => {
    console.log('likesReduser > ', action)

    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state, 
                likes: state.likes - 1
            }
        default:
            return state
    }
}