import React from 'react'
import Hero from './components/Hero';
import Products from './components/Products';
import ProductCard from './components/ProductCard';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './components/about';

function App() {
  return (<>
    <Navbar />
    <Hero />
    <About />
    <Products />
    <ProductCard />
    <Footer />
    </>
  )

}

export default App;