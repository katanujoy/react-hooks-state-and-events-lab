// src/__tests__/ShoppingList.test.js
import { render, screen } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList'; // Adjust path as needed

test("displays all items when initially rendered", () => {
  const testData = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Cake', category: 'Dessert' },
  ];
  const { container } = render(<ShoppingList items={testData} />);
  const itemsDiv = container.querySelector(".Items");

  expect(itemsDiv).not.toBeNull(); // Check if the element exists
  expect(itemsDiv.children).toHaveLength(testData.length); // Check if the number of children matches
});
