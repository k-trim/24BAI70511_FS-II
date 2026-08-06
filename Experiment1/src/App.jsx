import { useState } from 'react'
import './App.css'
import React from 'react'

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const user = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Chandigarh"
  };


  
  // const [cartCount, setCartCount] = useState(0);

  const addtoCart = () => {
    setCartCount(prev => prev + 1);
  };


  return (
    <>
    {/* <Navbar cartCount={cartCount}/> */}
    <Home user={user}/>




    </>
  );
}

export default App;
