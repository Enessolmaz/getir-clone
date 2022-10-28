
import * as React from 'react';
import Categories from './Categories';
import Footer from './Footer';
import Header from './Header';
import MobileApp from './MobileApp';
import Slide from "./Slide"

function Home() {
  return (
   

    <div>
      <Header/>
      <Slide/>
      <Categories/>
  
      {/* Yap */}
      
      <MobileApp/>
      <Footer/>
    </div>
  )
}

export default Home