import { useState } from 'react'
import App from '../App'
import React from 'react'
import Restaurant from './Restaurant'


function Home(props) {
  


  return (
    <>

    <Restaurant user={props.user}/>
      
    </>
  );
}

export default Home;