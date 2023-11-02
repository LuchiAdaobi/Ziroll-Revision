import Troll from '../assets/troll-face.png'

export default function Header(){
    return (
      <header className='header'>
        <img src={Troll} alt="troll face" />
        <p className="logo">Meme Generator</p>
        <p>React Course - Project 3</p>
      </header>
    );
}