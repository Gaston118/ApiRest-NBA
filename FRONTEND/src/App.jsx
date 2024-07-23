import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopNavbar from './components/Navbar/TopNavbar';
import Footer from './components/FooterComp/Footer';
import AppHome from './pages/AppHome';
import Team from './pages/Team'
import './App.css';

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-600">
      <Router>
        <TopNavbar />        
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<AppHome />} />
            <Route path="/:teamName" element={<Team />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
