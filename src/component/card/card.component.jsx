import './card.styles.scss';

function Card({ card: { imageUrl, id, title } }) {
    return (
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }} key={id}>
            <div className="title-box">
                {title}
                <span>Shop Now</span>
            </div>
        </div>
    );
}

export default Card;