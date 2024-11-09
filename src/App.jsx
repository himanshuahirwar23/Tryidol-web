import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import NavPortfolio from './pages/NavPortfolio';

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/portfolio" element={<NavPortfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
