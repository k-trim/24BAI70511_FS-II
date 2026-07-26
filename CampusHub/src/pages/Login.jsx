import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  function login() {
    if (email === "" || password === "") 
    {
      alert("Please enter Email and Password");
      return;
    }

    localStorage.setItem("name", "Trimann");
    localStorage.setItem("email", email);
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;