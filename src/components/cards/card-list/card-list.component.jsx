import CardItem from "../card-item/card-item.component";
import './card-list.style.scss';

function CardList({categories}) {
    return (
        <div className="card-container">
            {
                categories.map(cat =>
                    <CardItem key={cat.id} category={cat}/>
                )
            }
        </div>
    )
}

export default CardList;