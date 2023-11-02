import MapPin from "../assets/map-pin.png";

export default function TravelCard(props) {
  return (
    <>
    <main className="travel-card">
      <img
        src={props.item.imageUrl}
        alt={props.item.title}
        className="card-image"
      />
      <div className="card-right">
        <div className="card-right-small">
          <img src={MapPin} alt="map pin" className="pin" />
          <small className="cap">{props.item.country}</small>
          <a href={props.item.mapLink}>
            <small className="gray">View on Google Maps</small>
          </a>
        </div>
        <h1 className="title">{props.item.title}</h1>
        <p className="date">
          {props.item.startDate} - {props.item.startDate}
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </main>
      <hr />
      </>
  );
}
