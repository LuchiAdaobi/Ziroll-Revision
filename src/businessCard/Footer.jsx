import Twitter from "../assets/Twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.jpg";
import Github from "../assets/github.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#">
        <img src={Twitter} alt="X" />
      </a>
      <a href="#">
        <img src={Facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={Instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={Github} alt="github" />
      </a>
    </footer>
  );
}
