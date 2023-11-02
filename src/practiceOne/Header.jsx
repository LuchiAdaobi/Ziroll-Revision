import reactLogo from './assets/download.png'


export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img src={reactLogo} alt="react logo" className="logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
