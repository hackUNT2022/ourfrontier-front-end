import { useState } from "react";
import Definition from "../../Components/Definition";
import './Glossary.css'
import { terms } from "../../Data/Terms";



const Gloassary = () => {
    const [word,setWord] = useState('Moon')
    const keys = Object.keys(terms).sort();

    return(
        <div className="glossary">
            <div className="words">
                {
                    keys.map((word,index)=>{
                        return <button key={index}className="def" onClick={()=>setWord(word)}>{word}</button>
                    })
                }
            </div>
            <div className="defi">
                <Definition word = {word} wordDefiniton = {terms[word]}/>
            </div>
        </div>
    )





}
export default Gloassary;