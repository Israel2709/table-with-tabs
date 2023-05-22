import { v4 as uuidv4 } from "uuid";

const ProductItem = (props) => {
  const { item } = props;
  const uuid = uuidv4();
  return (
    <li key={uuid}>
      Producto: {item.name}, Precio: {item.price} {uuid}
    </li>
  );
};

export default ProductItem;
