import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../LoginPage/index.scss";

function RegisterPage() {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3001/api/users";
      const { data: res } = await Axios.post(url, data);
      Swal.fire({
        icon: "success",
        title: "Your are now registered",
      }).then(() => (window.location = "http://localhost:3000/login"));
      console.log(res.message);
    } catch (error) {
      if (error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4 text-light">Create your account</h1>
      <form onSubmit={handleSubmit}>
        <h1> </h1>
        <div className="inset">
          <label htmlFor="userName">USERNAME</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={data.userName}
            onChange={handleChange}
          />

          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />

          <label htmlFor="confirm_password">PASSWORD</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
          <label htmlFor="confirm_password">CONFIRM PASSWORD</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={data.confirm_password}
            onChange={handleChange}
          />
          {error && <div className="error_msg">{error}</div>}
          <div className="p-container text-center mt-3">
            <input type="submit" name="go" id="go" value="Let's go" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
