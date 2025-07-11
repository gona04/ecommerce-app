import CardListItem from "./card-list-item/card-list-item.component";
import './card-list.styles.scss';

function CardList({categories}) {
    return (
        <div className="card-categories">
            {
                categories.map((categoryItem) => 
                    <CardListItem key={categoryItem.id} category={categoryItem}/>
                )
            }
        </div>
    )
}

export default CardList;