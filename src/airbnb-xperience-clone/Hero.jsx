import HeroImage from "../assets/airbnb-hero-photo.png";
export default function Hero() {
  return (
    <section className="hero">
      <img src={HeroImage} alt="hero image" className="hero-image"/>

      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
