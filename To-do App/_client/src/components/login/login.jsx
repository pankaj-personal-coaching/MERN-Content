import React, { useState } from "react";
import { userLogin } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = "http://localhost:8080/api/users/auth/login";
      const userCreds = {
        username,
        password,
      };
      const { token } = await userLogin(url, userCreds);
      localStorage.setItem("token", token);
      navigate("/tasks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          className="form-input"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="form-input"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
};
