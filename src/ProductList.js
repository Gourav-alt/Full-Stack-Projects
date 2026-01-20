import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/productsSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});

  return (
    <div>
      <h3>Product Catalog</h3>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h4>{category}</h4>
          <ul>
            {groupedProducts[category].map((p) => (
              <li key={p.id}>
                {p.name} – ₹{p.price}
                <button onClick={() => dispatch(removeProduct(p.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
