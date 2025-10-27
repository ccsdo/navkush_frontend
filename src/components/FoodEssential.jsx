import React from "react";

const FoodEssential = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Food Essentials Distribution</h1>
      <p className="mb-6">
        Our Food Essentials Distribution initiative focuses on providing
        nutritious and necessary food items to underprivileged families in our
        community. This program ensures that no family goes to bed hungry and
        that they have access to basic sustenance.
      </p>
      <img
        src="/assets/food-essential.jpg"
        alt="Food Essentials Distribution"
        className="rounded-lg shadow-md mb-6"
      />
      <p>
        Through this project, we aim to support vulnerable groups including
        children, the elderly, and low-income households by providing essential
        grocery items on a regular basis.
      </p>
    </div>
  );
};

export default FoodEssential;
