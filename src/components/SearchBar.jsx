import React from 'react';
import { Search } from 'lucide-react'; // Optional icon library (install with `npm install lucide-react`)

function SearchBar({ setFilters }) {
  const handleSearch = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  return (
    <div className=" w-full flex justify-center">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search cars..."
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 rounded-full shadow-sm border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition duration-200"
        />
      </div>
    </div>
  );
}

export default SearchBar;
