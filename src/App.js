
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import PageCategories from './components/PageCategories';
import { useState } from 'react';
import products from "./components/json/products.json";

function App() {

  const [menuItem, setMenuItem] = useState(products);

  const filter = (button) => {
    if (button === 'Hepsi') {
      setMenuItem(products);
      return;
    }
    
    const filteredData = products.filter(item => item.category === button);
    setMenuItem(filteredData)
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home products={menuItem} />} />
          <Route path="categories" element={<PageCategories filter={filter} products={menuItem} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
