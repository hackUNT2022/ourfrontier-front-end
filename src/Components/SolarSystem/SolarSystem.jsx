
import Circle from '../../assets/SVG/Circle.svg'


import './SolarSystem.css'


const SolarSystem = () =>{


    return(
        <div className='front-container'>
        <div className="solar-system">
            <a href="#Sun">
                <img src={Circle} alt="The Sun" className=" circle sun" />
            </a>
            <a href="#Mercury">
                <img src={Circle}  alt="Mecury" className=" circle mercury" />
            </a>
            <a href="#Venus">
                <img src={Circle}  alt="Venus" className=" circle venus" />
            </a>
            <a href="#Earth">
                <img src={Circle}  alt="Earth" className=" circle earth" />
            </a>
            <a href="#Mars">
                <img src={Circle}  alt="Mars" className=" circle mars" />
            </a>
            <a href="#Jupiter">
                <img src={Circle}  alt="Jupiter" className=" circle jupiter" />
            </a>
            <a href="#Saturn">
                <img src={Circle} alt="Saturn" className=" circle saturn" />
            </a>
            <a href="#Uranus">
                <img src={Circle} alt="Uranus" className=" circle uranus" />
            </a>
            <a href="#Neptune">
                <img src={Circle} alt="Neptune" className=" circle neptune" />
            </a>
            

        </div>
        <div className="notice">
            <h4>*Not to Scale</h4>
        </div>
        </div>
    )

}

export default SolarSystem;