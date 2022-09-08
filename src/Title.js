import { useDispatch, useSelector } from "react-redux"
import { inputText } from "./redux/actions" 

const Title = (props) => {
    console.log('props title > ', props)

    const text = useSelector(state => {
        const { inputReduser } = state
        return inputReduser.text
    })
    const dispath = useDispatch()

    const handleChange = (event) => {
        console.log('handle text >> ', event.target.value)
        dispath(inputText(event.target.value))
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type='text' placeholder="Название..." onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title