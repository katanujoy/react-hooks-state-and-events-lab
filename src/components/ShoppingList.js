// src/components/ShoppingList.js
import React from 'react';

function ShoppingList({ items }) {
  return (
    <div className="Items">
      {items.map(item => (
        <div key={item.id} className="item">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
