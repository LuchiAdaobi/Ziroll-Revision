import Star from "../assets/star.png";

export default function Card(
  props
) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card">
      <img src={props.item.coverImg} alt={props.item.title} className="card-image" />
      {badgeText && <p className="card-badge">{badgeText}</p>}

      <div className="card-info">
        <img src={Star} alt="star rating" className="card-star" />
        <p className="rating">{props.item.stats.rating}</p>
        <p className="location">
          ({props.item.stats.reviewCount}) . {props.item.country}
        </p>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p>
        <span className="cost">From ${props.item.price}</span> / person
      </p>
    </section>
  );
}
