import { useNavigate } from "react-router-dom";
import "./card-list-item.component.scss";

function CardListItem({ category}) {
  const { title, imageUrl } = category;
  const navigate = useNavigate()
  return (
    <div className="card-body" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="card-label">
        <h3 onClick={() => navigate(`shop/${title.toLowerCase()}`)}> {title} </h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CardListItem;
