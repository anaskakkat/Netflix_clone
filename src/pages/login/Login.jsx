import React, { useEffect, useState } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import netflix_spinner from'../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading,setLoding]=useState(false)
  const userAuth = async (event) => {
    event.preventDefault();
    setLoding(true)
    if (signState === "Sign In") {
      await login(email,password);
    } else {
      await signUp(name, email, password);
    }
    setLoding(false)
  };

  return (
    loading?<div className="login_spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={Logo} alt="" className="login_logo" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={userAuth} type="submit">
            {signState}
          </button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form_switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already Have Account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
