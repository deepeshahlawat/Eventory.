import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import MainPage from './components/MainPage';
const App = () => {
  return(
  <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;