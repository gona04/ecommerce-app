import "./card-list-item.component.scss";

function CardListItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <div
      className="card-body"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="card-label">
        <h3> {title} </h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CardListItem;
