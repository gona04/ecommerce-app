import { createContext, useState } from "react";


export const CategoryContext = createContext({
  categoryMap: [],
});

function CategoryProvider({ children }) {
  const [categoryMap, setCategoryMap] = useState([]);

  const value = { categoryMap };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
