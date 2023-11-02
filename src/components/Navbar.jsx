import reactLogo from "../assets/reactjs-icon.png";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={reactLogo} alt="react logo" className="image" />
          <h3 className="logo-text">ReactFacts</h3>
        </div>

        <div className="nav-right">
          <h4>React Course - Project 1</h4>
        </div>
      </nav>
    </header>
  );
}
