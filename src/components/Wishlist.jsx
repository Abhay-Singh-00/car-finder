import React from 'react';

function Wishlist({ items = [], removeFromWishlist }) {
  if (items.length === 0) {
    return <p className="mt-4">Your wishlist is empty.</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Your Wishlist</h2>
      <ul className="space-y-2">
        {items.map(car => (
          <li key={car.id} className="border p-2 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{car.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">₹{car.price}</p>
            </div>
            <button
              onClick={() => removeFromWishlist(car.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
