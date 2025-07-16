import React, { useEffect, useState } from 'react';
import CarCard from './components/CarCard';
import FilterPanel from './components/FilterPanel';
import SearchBar from './components/SearchBar';
import Wishlist from './components/Wishlist';
import DarkModeToggle from './components/DarkModeToggle';
import { fetchCars } from './services/api';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CarDetail from './components/carDetail';

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    price: '',
    fuel: '',
    seating: ''
  });
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchCars()
      .then(data => {
        if (Array.isArray(data)) {
          setCars(data);
          setFilteredCars(data);
        } else {
          console.error("Data format issue:", data);
          setError('Invalid car data format.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setError('Failed to load car data.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let updated = [...cars];

    if (filters.search)
      updated = updated.filter(car =>
        car.name.toLowerCase().includes(filters.search.toLowerCase())
      );

    if (filters.brand)
      updated = updated.filter(car => car.brand === filters.brand);

    if (filters.price)
      updated = updated.filter(car => car.price <= parseInt(filters.price));

    if (filters.fuel)
      updated = updated.filter(car => car.fuelType === filters.fuel);

    if (filters.seating)
      updated = updated.filter(car => car.seating === parseInt(filters.seating));

    if (sort === 'low') updated.sort((a, b) => a.price - b.price);
    if (sort === 'high') updated.sort((a, b) => b.price - a.price);

    setFilteredCars(updated);
    setCurrentPage(1);
  }, [filters, sort, cars]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = Array.isArray(filteredCars)
    ? filteredCars.slice(indexOfFirstCar, indexOfLastCar)
    : [];

  const totalPages = Array.isArray(filteredCars)
    ? Math.ceil(filteredCars.length / carsPerPage)
    : 0;

  const addToWishlist = (car) => {
    const updated = [...wishlist, car];
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(car => car.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <Router basename="/car-finder">
      <div className="p-4 dark:bg-gray-900 dark:text-white min-h-screen">
        <nav className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 py-4 px-6 mb-6 shadow-md bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            <Link to="/">Car Finder</Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto lg:ml-auto">
            <div className="w-full sm:w-64">
              <SearchBar setFilters={setFilters} />
            </div>
            <Link
              to="/wishlist"
              className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition duration-300"
            >
              Wishlist
            </Link>
            <DarkModeToggle />
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <div className="flex flex-col lg:flex-row gap-4">
                <FilterPanel filters={filters} setFilters={setFilters} setSort={setSort} />
                <div className="flex-1">
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {currentCars.map(car => (
                          <CarCard
                            key={car.id}
                            car={car}
                            addToWishlist={addToWishlist}
                          />
                        ))}
                      </div>
                      <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                          <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded ${currentPage === index + 1
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 dark:bg-gray-700'}`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <Wishlist items={wishlist} removeFromWishlist={removeFromWishlist} />
            </>
          } />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/wishlist" element={<Wishlist items={wishlist} removeFromWishlist={removeFromWishlist} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
