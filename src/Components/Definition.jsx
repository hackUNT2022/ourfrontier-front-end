
import './Definition.css'

const Definition = (props) =>{
    const {word,wordDefiniton } = props
    return(
        <div className='holder'>
        <h2>{word}</h2>
        <p> {wordDefiniton}</p>
        </div>
    )

}

export default Definition;