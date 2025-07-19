import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuents } from "../utils/firebase/firebase.utils";


export const CategoryContext = createContext({
  categoryMap: [],
});

function CategoryProvider({ children }) {
  const [categoryMap, setCategoryMap] = useState([]);

  useEffect(() => {
    async function getCollection() {
      const categories = await getCategoriesAndDocuents()
      setCategoryMap(categories);
    }
    getCollection()
  }, [])

  const value = { categoryMap };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
