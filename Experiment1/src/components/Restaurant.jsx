import { useState } from 'react'
import FoodMenu from './FoodMenu'

import React from 'react'
function Restaurant(props) {
  


  return (
    <>
    <h1>Restaurant</h1>
    <FoodMenu user={props.user}/>
      
    </>
  );
}

export default Restaurant;
