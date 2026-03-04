import "../styles/components/Card.css";

function ItemCard({ title, children, className }) {
  return (
    <div className={`item-card ${className || ""}`}>
      <div className="card-accent" />
      <div className="card-header">
        <h4>{title}</h4>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ItemCard;
