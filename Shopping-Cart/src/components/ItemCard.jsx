import React, { useState } from "react";

const ItemCard = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex-shrink-0 w-48 p-4 bg-white border rounded-md m-2">
      <img
        src="your-image-url.jpg" // Replace with the actual image URL
        alt="Item Image"
        className="w-full h-32 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">Item Title</h2>
      <p className="text-gray-500">Item Description</p>
      <div className="mt-2 text-purple-500 font-bold">Price: $10.99</div>
      <div className="flex items-center mt-4">
        <button
          onClick={handleDecrease}
          className="p-2 border bg-purple-500 text-white rounded-l"
        >
          -
        </button>
        <span className="px-4">{count}</span>
        <button
          onClick={handleIncrease}
          className="p-2 border bg-purple-500 text-white rounded-r"
        >
          +
        </button>
      </div>
      <button className="mt-4 bg-purple-500 text-white p-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
