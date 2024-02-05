import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from './Firebase'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const navigate = useNavigate(); 

  const handleSignOut = async () => {
    try {
      await auth.signOut(); 
      navigate("/login"); 
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const apiKey = "9650c42acd258b957e74e39edf4e3f3d";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

  const searchCity = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${apiUrl}&q=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      alert("City not found. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Weather App</h1>
      <form onSubmit={searchCity}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      {weatherData && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{weatherData.name}</h5>
            <p className="card-text">
              <strong>Temperature:</strong> {Math.round(weatherData.main.temp)}°C
            </p>
            <p className="card-text">
              <strong>Feels like:</strong> {Math.round(weatherData.main.feels_like)}°C
            </p>
            <p className="card-text">
              <strong>Humidity:</strong> {weatherData.main.humidity}%
            </p>
            <p className="card-text">
              <strong>Wind speed:</strong> {weatherData.wind.speed} m/s
            </p>
          </div>
        </div>
      )}
      <div className="mt-3">
        <button className="btn btn-danger" style={{marginRight: 10}} onClick={handleSignOut}>
          Sign Out
        </button>
        <Link to="/users" className="btn btn-primary">
          Users Table
        </Link>
      </div>
    </div>
  );
}

export default App;