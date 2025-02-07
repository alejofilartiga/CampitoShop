import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../../Redux/categories/categoriesSlice";
import { CardCategoria } from './categoriesStyle';

export const Categoria = ({ name, category }) => {
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
    >
      {name}
    </CardCategoria>
  );
};

export default Categoria;
