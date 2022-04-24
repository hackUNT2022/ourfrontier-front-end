import Logo from '../../assets/SVG/Logo.svg'
import "./Navbar.css"


const Navbar = () => {


    return(
        <div className="Nav">
            <a href="/">
                <img src={Logo} alt="Our Frontier Logo" className='logo'/>
                <h1>Our Frontier</h1>
            </a>
        </div>
    )
}

export default Navbar;