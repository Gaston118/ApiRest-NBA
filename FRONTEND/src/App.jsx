import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Team from './pages/Team'
import TopNavbar from './components/Navbar/TopNavbar';
import Footer from './components/FooterComp/Footer';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-red-800">
      <Router>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:teamName" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
