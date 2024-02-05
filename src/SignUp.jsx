import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from "./Firebase";
import { Timestamp } from 'firebase/firestore';

import imageSrc from './assets/login-img.png';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        
        const userId = userCredential.user.uid;
        const registrationDate = new Date();
        await firestore.collection('users').doc(userId).set({
            email,
            status: "active",
            addeddate: Timestamp.fromDate(registrationDate)
        })
        navigate("/home")
        
    } catch (error) {
        setError(error.message);
        alert(error.message);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6" style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
          <h2 className="mb-4">Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Submit
            </button>
          </form>
          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
        <div className="col-md-6">
          <img src={imageSrc} alt="Signup Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
