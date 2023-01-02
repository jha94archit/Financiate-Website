import React from'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import ProductExcerpt from './components/ProductExcerpt';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductExcerpt />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
