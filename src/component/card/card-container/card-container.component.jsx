import Card from "../card-contents/card.component";
import './card-container.styles.scss';

function CardContainer({ categories }) {
  return (
    <div id="card-container" className="card-container-class">
      {categories.map((data) => (
        <Card card={data} />
      ))}
    </div>
  );
}

export default CardContainer;
