import { useSelector, useDispatch } from "react-redux";
import Categoria from "./Category";
import { CategoriasContainer } from "./categoriesStyle";
import { useEffect } from "react";
import { selectCategory } from "../../../Redux/categories/categoriesSlice";

const Categorias = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!selectedCategory) {
      dispatch(selectCategory('All'));
    }
  }, [selectedCategory, dispatch]);

  return (
    <CategoriasContainer>
      {categories.map((category) => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
