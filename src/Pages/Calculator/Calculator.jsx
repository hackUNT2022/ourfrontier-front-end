import { useEffect, useState } from 'react';
import { Dropdown } from '../../Components/Dropdown/Dropdown';
import './Calculator.css';

const Calculator = () => {
    const [units, setUnits] = useState('');
    const [convUnits, setConvUnits] = useState('');
    const [result, setResult] = useState(0);

    const childToParent = (childData) => {
        childData ==='Football Fields' || childData === 'Olympic Swimming Pools' ? 
        setConvUnits(childData) :
        setUnits(childData);
    }

    const handleChange = event => {
        setResult(event.target.value);
    }

    return (
        <div className='calculator-container'>
            <div className='calculator-header'>
                <h1 className='main-heading'>Travel Distance Calculator</h1>
            </div>
            <div className='calculator-body'>
                <div className='body-left'>
                    <div className='distance'>
                        <form>
                            <label htmlFor='distance_id'>Distance</label><br></br>
                            <input placeholder='Enter Value' onChange={handleChange}type='text' id='distance_id' fname='distance_id'></input>
                            <button type='submit'>Submit</button>
                        </form>
                        <div className="drop-holder">
                        <Dropdown items={["miles", "kilometers"]} name={'Units'} childToParent={childToParent}/>
                        </div>
                    </div>
                    <div className='in-holder'>
                        <h2 className='subheading'>In</h2>
                    </div>
                    <div className='distance-conversion'>
                        <div className='drop-holder'>
                            <Dropdown items={["Football Fields", "Olympic Swimming Pools"]} name={'Choose Conversion Units'} childToParent={childToParent} />
                        </div>
                    </div>
                </div>
                <div className='body-right'>
                    <form>
                        <h2 className='subheading'>Presets</h2>
                        <ul className='button-list'>
                            <button style={{background: "#d3d3d3"}}>Mercury</button>
                            <button style={{background: "#f2ba49"}}>Venus</button>
                            <button style={{background: "#228b22"}}>Earth</button>
                            <button style={{background: "#934838"}}>Mars</button>
                            <button style={{background: "#ff7f50"}}>Jupiter</button>
                            <button style={{background: "#ffffbf"}}>Saturn</button>
                            <button style={{background: "#f8f8ff"}}>Uranus</button>
                            <button style={{background: "#0080ff"}}>Neptune</button>
                        </ul>
                    </form>
                </div>
                <div className='results'>
                    {result}
                </div>
            </div>
        </div>
    )
}

export default Calculator