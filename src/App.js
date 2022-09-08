import { useSelector } from 'react-redux'
import './App.css'
import Title from './Title'
import Likes from './Likes'
import Comments from './Comments'
import Spin from './Spin'


const  App = () => {

  const error = useSelector(state => state.appReduser.error)

  return (
    <div className='App'>
      <div className='wrap'>
        <Spin />
        <div className='card'>
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className='card-image'>
            <img src='./sea.jpg' alt='surfing'/>
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default App