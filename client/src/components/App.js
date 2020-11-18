import React, {useState, useEffect}from 'react';

import AddItems from './add_items';
import Items from './items';
import Cart from './cart';

const ADD_ITEMS = 'add_items';
const ITEMS = 'items';
const CART = 'cart';

const localStorageItems = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
  const [cart, setCart] = useState([localStorageItems]);
  const [page, setPage] = useState(ADD_ITEMS);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);
  
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };


  return (

    <div>
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <a className="navbar-brand" href="#">Productbox Frontend Code Challenge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar navbar-collapse mr-5" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <button className="btn btn-outline-secondary" onClick={() => navigateTo(ADD_ITEMS)}>
         Add Item
        </button>
          <button className="btn btn-outline-secondary" onClick={() => navigateTo(ITEMS)}>
         Items
        </button>
          <button className="btn btn-outline-secondary" onClick={() => navigateTo(CART)}>
          Cart ({getCartTotal()})
        </button>
    
          </div>
        </div>
      </nav>
      </header>
      {page === ADD_ITEMS && (
        <AddItems />
      )}
      {page === ITEMS && (
        <Items cart={cart} setCart={setCart} />
      )}
      {page === CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
  
    </div>
  );
}

export default App;
