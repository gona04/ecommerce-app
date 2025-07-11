import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
return (
    <div className="card-container background-image" style={{'backgroundImage': `url(${imageUrl})`}}>
              <div className="category-body-container">
                <h3>{title.toUpperCase()}</h3>
                <p>Shop Now</p>
              </div>
            </div>
)
}

export default CategoryItem;