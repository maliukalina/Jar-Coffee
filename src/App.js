

import React from 'react'
import Hero from './components/Hero';
import Products from './components/Products';
import ProductCard from './components/ProductCard';
  mport Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
  <>
        <Navbar/>
    <Hero />
    <Products />
       <Footer/>
    </>
  )

}

export default App;

