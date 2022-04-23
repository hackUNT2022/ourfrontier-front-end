const Definition = (props) =>{
    const {word,wordDefiniton } = props
    return(
        <div>
        <h2>{word}</h2>
        <p> {wordDefiniton}</p>
        </div>
    )

}

export default Definition;