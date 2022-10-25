import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import Axios from "axios";
import "../LoginPage/index.scss";
import LoginImage from "../LoginPage/img/undraw_join_re_w1lh.svg";

function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3001/api/auth";
      const { data: res } = await Axios.post(url, data);
      localStorage.setItem("token", res.data);
      localStorage.setItem("userId", res.userId);
      window.location = "/user";
    } catch (error) {
      if (error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="logo text-center m-3">
          <Link to={"/"} className="link">
            <span className="logo-dev">DEV</span>
            <span className="logo-log">LOG</span>
            <span className="logo-end">.</span>
          </Link>
        </div>
        <div className="d-flex justify-content-around inset">
          <img className="register-img" src={LoginImage} alt="login-img" />
          <div className="right-section">
            <div className="">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input className="input-text"
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={data.email}
              />
              <label htmlFor="password">PASSWORD</label>
              <input className="input-password"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={data.password}
              />
              <div className="d-flex">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me for 14 days</label>
              </div>
              <div className="p-container text-center mt-5">
                <input type="submit" name="go" id="go" value="Let me in" />
              </div>
              {error && <div className="error_msg">{error}</div>}

              <div className="text-center">
                <Link to="/reset-password" className="btn">
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center">
                <Link to="/register" className="btn">
                  New here? Create an account
                </Link>
              </div>
            </div>

            <div className="hr">
              <div></div>
              <div>OR</div>
              <div></div>
            </div>
            <div className="d-flex justify-content-center mb-5">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google-icon"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
