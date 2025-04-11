// src/services/api.js
export const fetchCars = async () => {
    const response = await fetch('http://localhost:4000/cars');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  };
  