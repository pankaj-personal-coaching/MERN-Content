import React, { useState } from "react";
import { createRecord } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstname,
      lastname,
      email,
      username,
      password,
      gender,
      phone,
      role,
    };
    try {
      const url = `http://localhost:8080/api/users`;
      await createRecord(url, user, true);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setlastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPass(value);
        break;
      case "confirmPass":
        setConfirmPass(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "role":
        setRole(value);
        break;
      default:
        break;
    }
  };

  const checkBothPass = () => {
    if (password !== confirmPass) {
      setPassError(true);
    } else {
      setPassError(false);
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      {passError && (
        <p style={{ color: "red" }}>
          *Password and confirm password should be same
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          name="firstname"
          className="form-input"
          value={firstname}
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input
          name="lastname"
          className="form-input"
          value={lastname}
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          className="form-input"
          value={email}
          type="email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="username">Username: </label>
        <input
          name="username"
          className="form-input"
          value={username}
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          className="form-input"
          value={password}
          type="password"
          onChange={handleChange}
          onBlur={checkBothPass}
        />
        <br />
        <label htmlFor="confirmPass">Confirm Password: </label>
        <input
          name="confirmPass"
          className="form-input"
          value={confirmPass}
          type="password"
          onChange={handleChange}
          onBlur={checkBothPass}
        />
        <br />
        <label htmlFor="gender">Gender: </label>
        <select name="gender" onChange={handleChange}>
          <option>Please select Gender...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="phone">Phone: </label>
        <input
          name="phone"
          className="form-input"
          value={phone}
          type="number"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="role">Role: </label>
        <input
          name="role"
          className="form-input"
          value={role}
          type="text"
          onChange={handleChange}
        />
        <br />
        <button disabled={passError} type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};
