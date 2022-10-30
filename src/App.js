
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import PageCategories from './components/PageCategories';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="categories" element={<PageCategories />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
