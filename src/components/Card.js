import "./Card.css";

export default function Card({ image, name, status }) {
  return (
    <div className="card_container">
      {name}
      <p>
        <img src={image} alt="" width="100px" />
      </p>
      <p>{status}</p>
    </div>
  );
}
