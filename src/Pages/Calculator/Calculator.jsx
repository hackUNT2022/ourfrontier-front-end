import { useEffect, useState, useRef } from 'react';
import { Dropdown } from '../../Components/Dropdown/Dropdown';
import './Calculator.css';

const Calculator = () => {

  const [output, setOutput] = useState('')
  const [terms, setTerms] = useState('')

  const myRef = useRef(null);

  return (
      <div className='Calculator__container'>
        <div className="Calculator__title_container">
          <h1 className='Calculator__title'>Travel Distance Calculator</h1>
        </div>
        <div className='Calculator__content'>
            <div className='Presets__container'>
              <button style={{background: "#d3d3d3"}} 
                onClick={() => { 
                  myRef.current.value = 89866000 
                  setOutput(myRef.current.value)
                }}
               >
                 Mercury
               </button>
              <button style={{background: "#f2ba49"}}
                onClick={() => { 
                  myRef.current.value = 88365000 
                  setOutput(myRef.current.value)
                }}
              >
                Venus
              </button>
              <button style={{background: "#228b22"}}
                onClick={() => { 
                  myRef.current.value = 0 
                  setOutput(myRef.current.value)
                }}
              >
                Earth
              </button>
              <button style={{background: "#934838"}}
                onClick={() => {
                  myRef.current.value = 155500000
                  setOutput(myRef.current.value)
                }}
              >
                Mars
              </button>
              <button style={{background: "#ff7f50"}}
                onClick={() => {
                  myRef.current.value = 532660000
                  setOutput(myRef.current.value)
                }}
              >
                Jupiter
              </button>
              <button style={{background: "#ffffbf"}}
                onClick={() => {
                  myRef.current.value = 945530000
                  setOutput(myRef.current.value)
                }}
              >
                Saturn
              </button>
              <button style={{background: "#f8f8ff"}}
                onClick={() => {
                  myRef.current.value = 1923400000
                  setOutput(myRef.current.value)
                }}
              >
                Uranus
              </button>
              <button style={{background: "#0080ff"}}
                onClick={() => {
                  myRef.current.value = 2851200000
                  setOutput(myRef.current.value)
                }}
              >
                Neptune
              </button>
            </div>
            <h2 >Distance (mi)</h2>

    
            <input 
              ref={myRef}  
              className='Calculator__input' 
              type="text" 
              placeholder="135"
              onChange={()=> setOutput(myRef.current.value)}
            />
            <h2>In terms of...</h2>
            <div className='Options__container'>
              <button className='Calculator__input-button' onClick={()=> setTerms(17.6)}>
                <img src='https://www.svgrepo.com/show/219532/american-football-field.svg' alt='Football Field' />
              </button>
              <button className='Calculator__input-button' onClick={()=> setTerms(16.09)}>
                <img src='https://images.vexels.com/media/users/3/211681/isolated/preview/f635de764b1c111ef4c56cb4b3916617-swimming-pool-flat.png' alt='olympic swimming pool' />
              </button>
            </div>
            <div className='Results__container'>
              <h1>{terms && output && `The value is ${(output*terms).toFixed(3)}`}
                  {(terms === 17.6) ? " football fields" : terms && " swimming pools" }
              </h1>
            </div>
            
        </div>
        
      </div>
  )
}

export default Calculator