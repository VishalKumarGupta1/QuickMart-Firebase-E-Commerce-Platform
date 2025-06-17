import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Mycontext from "../../context/data/Mycontext";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";

const Login = () => {
  // // Inside your component:
  // useEffect(() => {
  //   setloading(false); // Reset loading to false when login page is loaded
  // }, []);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const context = useContext(Mycontext);
  const { loading, setloading } = context;

  const naviagte = useNavigate();

  //login logic on submit
  const handlelogin = async () => {
    setloading(true);
    if (email === "" || password === "") {
      setloading(false);
      return toast.error("All fields are required");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Login Succesfully");
      naviagte("/");
      setemail("");
      setpassword("");
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...");
      setloading(false);
    }
  };

  return (
    <>
      {/* Show loader only when loading is true */}
      {/* {loading && <Loader />} */}

      <div className="login-wrapper">
        <div className="login-box">
          <h1 className="login-title">Login</h1>

          {/* Wrap inputs in a form to avoid DOM warnings and support Enter key submission */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission (page reload)
              handlelogin(); // Call your login handler
            }}
          >
            {/* Email Input Field */}
            <input
              type="email"
              name="email"
              className="login-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            {/* Password Input Field */}
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            {/* Submit Button */}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          {/* Footer Text with Signup Link */}
          <p className="login-footer-text">
            Don't have an account?{" "}
            <Link to="/signup" className="login-link">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
