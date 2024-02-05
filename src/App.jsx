import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import HomePage from './HomePage';
import UsersTable from './UsersTable';
import LandingPage from './LandingPage';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/users" element={<UsersTable />} />
    </Routes>
  </Router>
  );
}

export default App;
