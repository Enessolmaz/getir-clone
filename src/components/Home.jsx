import * as React from "react";
import Categories from "./Categories";


import MobileApp from "./MobileApp";
import Slide from "./Slide";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageCategories from "./PageCategories";

function Home() {
  return (
    <div>


      <Slide />
      <Categories />
      <MobileApp />
      
    </div>
  );
}

export default Home;
