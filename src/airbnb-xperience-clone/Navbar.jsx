import AirbnbLogo from '../assets/airbnb-logo.png'

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={AirbnbLogo} alt="Airbnb Logo" />
        </nav>
    )
}