import * as React from "react";
import Categories from "./Categories";
import MobileApp from "./MobileApp";
import Slide from "./Slide";

function Home({products}) {

  
  return (
    <div>
    
      <Slide />
      <Categories products={products} />
      <MobileApp />
      
    </div>
  );
}

export default Home;
