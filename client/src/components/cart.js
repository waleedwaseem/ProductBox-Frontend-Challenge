import React from 'react';
import './items.css';


export default function Cart({ cart, setCart }) {

  const clearCart = () => {
    setCart([]);
  };


  const removeFromCart = (itemToRemove) => {
    setCart(
      cart.filter((item) => item !== itemToRemove)
    );
  };

  return (    
    <>
      <h3>Cart</h3>
      {cart.length > 0 && (
        <button onClick={clearCart} className="btn btn-warning">Clear Cart</button>
      )}
      <div className="items">
        {cart.map(item =>
          <div className="item" key={item.id}>
              <h3>{item.name}</h3>
              <h4>Price: {item.price}</h4>
              <img src={item.img} alt={item.name} />
              <button onClick={() => removeFromCart(item)} className="btn btn-danger">
              Remove
            </button>
          </div>
        )}
      </div>
      
    </>
  );
}