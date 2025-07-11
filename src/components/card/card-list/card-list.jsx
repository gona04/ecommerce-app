import CardItem from "../card-item/card-item";
import './card-list.scss';

function CardList({categories}) {
    return (
        <div className="card-containers">
            {
                categories.map(cat => (
                        <CardItem key={cat.id} category={cat} />
                ))
            }
        </div>
    )
}

export default CardList;