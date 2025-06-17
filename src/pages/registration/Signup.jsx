import React, { useContext, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Mycontext from "../../context/data/Mycontext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const context = useContext(Mycontext);
  const { loading, setloading } = context;

  const signuphandle = async () => {
    setloading(true);
    if (name === "" || email === "" || password === "") {
      setloading(false);
      return toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Signup Succesfully");
      setname("");
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
      <div className="signup-wrapper">
        <div className="signup-box">
          {/* {loading && <Loader />} */}
          <h1 className="signup-title">Signup</h1>
          <input
            type="text"
            name="name"
            className="signup-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="signup-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={signuphandle} className="signup-button">
            Signup
          </button>
          <p className="signup-footer-text">
            Have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
