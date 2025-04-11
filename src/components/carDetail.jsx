import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCars } from '../services/api';
import {
  FaGasPump,
  FaChair,
  FaRupeeSign,
  FaCarSide,
  FaInfoCircle,
} from 'react-icons/fa';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCars()
      .then((cars) => {
        const selectedCar = cars.find((c) => c.id.toString() === id);
        if (selectedCar) {
          setCar(selectedCar);
        } else {
          setError('Car not found.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Error loading car details.');
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="p-4 text-center text-lg text-gray-600 dark:text-gray-300">
        Loading car details...
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-center text-red-600 dark:text-red-400">
        {error}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6 py-8 rounded-3xl shadow-2xl transition-all duration-300"
         style={{
           backgroundColor: 'var(--card-bg)',
           color: 'var(--text-color)',
           border: '1px solid var(--card-border)',
         }}>
      <h2 className="text-3xl font-extrabold flex items-center gap-2 mb-6">
        <FaCarSide className="text-blue-600 dark:text-blue-400" /> {car.name}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={car.image || 'https://via.placeholder.com/500x300.png?text=Car+Image'}
            alt={car.name}
            className="rounded-xl w-full object-cover shadow-md"
          />
        </div>

        <div className="md:w-1/2 space-y-4 text-lg">
          <div className="flex items-center gap-3">
            <FaCarSide className="text-indigo-500" />
            <span><strong>Brand:</strong> {car.brand}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaRupeeSign className="text-yellow-500" />
            <span><strong>Price:</strong> ₹{car.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaGasPump className="text-green-500" />
            <span><strong>Fuel Type:</strong> {car.fuelType}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaChair className="text-purple-500" />
            <span><strong>Seating Capacity:</strong> {car.seating}</span>
          </div>
          <div className="flex items-start gap-3 mt-4">
            <FaInfoCircle className="text-gray-600 dark:text-gray-300 mt-1" />
            <span>
              <strong>Description:</strong><br />
              {car.description || 'No description available.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
