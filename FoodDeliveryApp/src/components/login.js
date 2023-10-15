import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [formData, setFormData] = useState({
    Name: "",
  });
  const [log, setLog] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log("Form data:", formData);
    setLog(true)
  };

  return (
    <>
      {!log ? <div class="container">
        <div class="card">
          <form onSubmit={handleSubmit}>
            <input type="text"
              style={{ outlineColor: "lightsalmon" }}
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              placeholder="Username" />
            <input style={{ outlineColor: "lightsalmon" }} type="Email" placeholder="Email" />
            <input style={{ outlineColor: "lightsalmon" }} type="password" placeholder="Password" />
            <input style={{ outlineColor: "lightsalmon" }} type="password" placeholder="Confirm Password" />
            <div class="buttons">
              <button class="register-button">Register</button>
              <button type="submit" class="login-button">Login</button>
            </div>
          </form>
        </div>
      </div>
        :
        <div style={{ textAlign: "center", padding: "90px" }}>
          <h1 className="menuheading"><span className="textcard">Welcome
            Back !!! </span>{formData.Name}</h1>
          <h5 className="textcard" style={{ padding: "50px", fontSize: "20px" }}>{`Let's Order Some Food!`}</h5>

          <Link className='add-btn' style={{ textDecoration: "none" }} to="/home">Order Now </Link>

        </div>}
    </>
  )
}
export default Login;