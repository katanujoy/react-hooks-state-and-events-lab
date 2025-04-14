// src/components/Item.js
import React, { useState } from 'react';

function Item({ name, category }) {
  // Step 1: Create state to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Event handler to add/remove item from cart
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name} - {category}
      <button onClick={toggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
