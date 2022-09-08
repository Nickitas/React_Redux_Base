import { connect } from 'react-redux'
import { incrementLikes, decrementLikes } from './redux/actions'

const Likes = (props) => {
    console.log('render > ', props)
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}




function mapStateToProps(state) {
    console.log('mapStateToProps > ', state)
    const { likesReduser } = state
    return {
        likes: likesReduser.likes
    }
}

function mapDispathToProps(dispath) {
    return {
        onIncrementLikes: () => {
            return dispath(incrementLikes())
        },
        onDecrementLikes: () => {
            return dispath(decrementLikes())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Likes)