import { Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState, memo } from 'react';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ScrollPage from './components/ScrollPage';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from './pages/Company';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/company' element={<Company />} />
      </Routes>
      <ScrollPage />
      <Footer />
    </div>
  );
}

export default App;
