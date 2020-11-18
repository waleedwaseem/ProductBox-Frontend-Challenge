import React, { useState, useEffect } from 'react';
import api from '../utils/api';

import './items.css';

function Items({ setCart, cart}) {

  const [items, getitems] = useState([]);


  useEffect(() => {
    api.get('/').then(res => {
      console.log(res);
      getitems(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  const addToCart = (item) => {

    let newCart = [...cart];
    let itemInCart = newCart.find(
      (itemName) => item.name === itemName.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...item,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
 
  };



   return (
     <>
     <h3>All Items</h3>
      <div className="items">
        {items.map(item =>
          <div className="item" key={item.id}>
              <h3>{item.name}</h3>
              <h4>Price: {item.price}</h4>
              <img src={item.img} alt={item.name} />
              <button className="btn btn-danger m-2" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
          </div>
          
        )}
      </div>
</>
     )
     
}

export default Items;