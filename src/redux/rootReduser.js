import { combineReducers } from 'redux'
import { likesReduser } from './likesReduser'
import { inputReduser } from './inputReduser'
import { commentsReduser } from './commmentsReduser'
import { appReduser } from './appReduser'


export const rootReduser = combineReducers({
    likesReduser,
    inputReduser,
    commentsReduser,
    appReduser,
})