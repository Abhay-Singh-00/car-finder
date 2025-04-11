import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaGasPump, FaChair, FaRupeeSign, FaHeart, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CarCard = ({ car, addToWishlist }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className="rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-color)',
        border: '1px solid var(--card-border)',
      }}
    >
      <div className="relative h-40 w-full mb-4 overflow-hidden rounded-xl">
        <motion.img
          src={car.image || 'https://via.placeholder.com/300x150.png?text=Car+Image'}
          alt={car.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <h2 className="text-xl font-bold mb-2">{car.name}</h2>

      <div className="space-y-1 text-sm">
        <p className="flex items-center gap-2">
          <FaCar className="text-blue-500" /> Brand: {car.brand}
        </p>
        <p className="flex items-center gap-2">
          <FaGasPump className="text-green-500" /> Fuel Type: {car.fuelType}
        </p>
        <p className="flex items-center gap-2">
          <FaChair className="text-purple-500" /> Seating: {car.seating} Seater
        </p>
        <p className="flex items-center gap-2">
          <FaRupeeSign className="text-yellow-500" /> Price: ₹{car.price}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addToWishlist(car)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          <FaHeart /> Add to Wishlist
        </motion.button>

        <motion.div whileTap={{ scale: 0.95 }} className="w-full">
          <Link
            to={`/car/${car.id}`}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition w-full"
          >
            <FaInfoCircle /> View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarCard;
