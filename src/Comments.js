import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'
import { commentCreate, commentsLoad } from './redux/actions'
import SingleComment from './SingleComment'

const Comments = (props) => {
    console.log('comments props > ', props)

    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        console.log('redux state > ', state)
        const { commentsReduser } = state
        return commentsReduser.comments
    })
    console.log('commsents >>> ', comments)
    const dispath = useDispatch()


    const handleInput = (event) => {
        console.log('input >>> ', event.target.value)
        setTextComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = uniqid()
        dispath(commentCreate(textComment, id))
    }

    useEffect(() => {
        dispath(commentsLoad())
    }, [])

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type='text' placeholder='Комментарий...' value={textComment} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
            {
                !!comments.length && comments.map(res => {
                    return <SingleComment key={res.id} data={res} />
                })
            }
        </div>
    )
}

export default Comments