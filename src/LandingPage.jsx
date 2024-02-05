import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import landingImage from './assets/landing-page-img.png';

const LandingPage = () => {
  return (
    <div className="container mt-5" style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="text-center">
            <h1 className='display-4 text-primary'>Welcome to Weather App</h1>
            <p className='lead text-secondary' >Explore amazing features and content.</p>
            <div className="d-flex justify-content-center">
              <Link to="/signup" className="btn btn-primary mx-2">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-secondary mx-2">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={landingImage} alt="App" className="img-fluid "  style={{borderRadius: "20px"}}/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
