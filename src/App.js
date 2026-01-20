import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  const { isLoggedIn, userName, role, logout } =
    useContext(AuthContext);

  if (!isLoggedIn) return <Login />;

  return (
    <div>
      <h2>Welcome {userName} ({role})</h2>
      <button onClick={logout}>Logout</button>

      {role === "admin" && <AddProduct />}
      <ProductList />
    </div>
  );
}

export default App;
