import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home"
const App = () => {
  return(
  <>
  <div className='container mx-auto bg-white '>
  <Header/>
  <Home/>
  <Footer/>
  </div>

  </>
  )
};

export default App;
