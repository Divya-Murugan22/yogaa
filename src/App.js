import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar'; // Import the Navbar component
import PricingPlans from './components/PricingPlans';
import MyBlog from './components/MyBlog';
import Day1 from './components/Day1';



import './App.css';
import Front from './components/Front';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Use the Navbar component here */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/blog" element={<MyBlog />} />

          <Route path="/contact" element={<ContactPage />} /> {/* Fixed typo */}
          <Route path="/classes" element={<Front />} /> {/* Fixed typo */}
          <Route path='/blog/:id' element={<Day1/>}/>
        </Routes>
      
      </div>
      
      
    </Router>
  );
}

export default App;
