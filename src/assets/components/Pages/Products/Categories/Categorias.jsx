import { useSelector, useDispatch } from "react-redux";
import Categoria from "./Category";
import { CategoriasContainer } from "./categoriesStyle";

const Categorias = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <CategoriasContainer>
      {categories.map((category) => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
