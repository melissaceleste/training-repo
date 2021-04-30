import "./Card.css";

export default function Card({ url, title }) {
  return (
    <div className="card_container">
      <h3> {title}</h3>
      <p>
        <img src={url} alt="" width="100px" />
      </p>
    </div>
  );
}
