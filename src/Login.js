import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, role);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
