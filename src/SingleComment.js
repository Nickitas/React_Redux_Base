import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { commentUpdate, commentDelete } from "./redux/actions"


const SingleComment = ({ data }) => {
    const [commentText, setCommentText] = useState('')
    const { text, id } = data
    const dispath = useDispatch()

    const handleUpdate = (event) => {
        event.preventDefault()
        dispath(commentUpdate(commentText, id))
    }

    const handleDelete = (event) => {
        event.preventDefault()
        dispath(commentDelete(id))
    }

    useEffect(() => {
        if(text) {
            setCommentText(text)
        }
    }, [text])


    const handleInput = (event) => {
        setCommentText(event.target.value)
    }

    return (
        <form onSubmit={handleUpdate} className='comments-item'>
            <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
            <input type='text' value={commentText} onChange={handleInput} />
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment