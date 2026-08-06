import { useState } from 'react'
import UserInfo from './UserInfo';

import React from 'react'

function FoodMenu(props) {
  const foodItems = [
    { id: 1, name: 'Pizza', price: 299 },
    { id: 2, name: 'Burger', price: 149 },
    { id: 3, name: 'Pasta', price: 199 },
  ];


  const [cartCount, setCartCount] = useState(0);

  return (
    <>
    
    <UserInfo user={props.user}/>



    <br></br>

    <h1> Menu </h1>

    {foodItems.map((item, index) => (
        <h3 key={index}>{item.name}   Rs.{item.price} <button onClick={() => setCartCount(prev => prev + 1)}>Add to Cart</button> </h3>
      ))}

      

    <h2>Welcome {props.user.name}</h2>
    <h2>Cart: {cartCount} items</h2>

    
      
    </>
  );
}

export default FoodMenu;
