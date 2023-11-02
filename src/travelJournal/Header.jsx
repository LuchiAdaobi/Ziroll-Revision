import globe from '../assets/globe.png'

export default function Header(){
    return(
        <header className="header">
            <img src={globe} alt="globe" className='globe'/>
            <span>my travel journal</span>
        </header>
    )
}