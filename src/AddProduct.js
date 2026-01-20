import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { useState } from "react";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [price, setPrice] = useState("");

  const add = () => {
    if (!name || !price) return;

    dispatch(
      addProduct({
        id: Date.now(),
        name,
        category,
        price
      })
    );

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h3>Add Product (Admin)</h3>

      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Grocery</option>
        <option>Books</option>
      </select>

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={add}>Add Product</button>
    </div>
  );
};

export default AddProduct;
