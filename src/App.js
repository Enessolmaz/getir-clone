
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import PageCategories from './components/PageCategories';
import { useEffect, useState } from 'react';
import products from "./components/json/products.json";
import NotFound from './components/NotFound';

function App() {

  const [menuItem, setMenuItem] = useState(products);
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)


  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0)
    )
  }, [basket])


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
          <Route path="/categories" element={
            <PageCategories
              basket={basket}
              setBasket={setBasket}
              total={total}
              filter={filter}
              products={menuItem}
            />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
