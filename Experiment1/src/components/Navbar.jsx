import { useState } from 'react'
import App from '../App'

import React from 'react'

function Navbar(props) {
  

  return (
    <>
    <h2>Welcome {props.user.name}</h2>
    <h2> Cart: {props.cartCount} items</h2>
      
    </>
  )
}

export default Navbar
