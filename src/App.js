import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
