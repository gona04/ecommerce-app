import CategoryItem from "../category-item/category-item.component";
import './category-list.style.scss';

function CategoryList({categories}) {
  return (
    <div className="container">
      {categories.map((catItem) => (
        <CategoryItem key={catItem.id} category={catItem} />
      ))}
    </div>
  );
}

export default CategoryList;
