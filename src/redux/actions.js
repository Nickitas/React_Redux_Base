import { 
    INCREMENT, 
    DECREMENT, 
    INPUT_TEXT, 
    COMMENT_CREATE, 
    COMMENT_UPDATE, 
    COMMENT_DELETE,
    COMMENTS_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
} from "./types"

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}

export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: { text, id }
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}




export function loaderDisplayOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}
export function loaderDisplayOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function errorOn(text) {
    return dispath => {
        dispath({
            type: ERROR_DISPLAY_ON,
            text
        })
        setTimeout(() => {
            dispath(errorOff())
        }, 2000)
    }
}
export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF
    }
}

export function commentsLoad() {
    return async dispath => {
        try {
            dispath(loaderDisplayOn())
            const respons = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            const jsonData = await respons.json()
            
            setTimeout(() => {
                dispath({
                    type: COMMENTS_LOAD,
                    data: jsonData
                })
                dispath(loaderDisplayOff())
            }, 1000)
    
            // dispath({
            //     type: COMMENTS_LOAD,
            //     data: jsonData
            // })
            // dispath(loaderDisplayOff())
        } catch(err) {
            dispath(errorOn('Ошибка API'))
            dispath(loaderDisplayOff())
        }
    }
}
