import React from 'react';
import { motion } from 'framer-motion';
import { X, Filter } from 'lucide-react';
import { FilterOptions } from '../../types';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFiltersChange: (filters: Partial<FilterOptions>) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFiltersChange
}) => {
  const genres = [
    'Classical', 'Bollywood', 'Rock', 'Pop', 'Folk', 'Jazz', 'Electronic', 'Hip Hop', 'Indie', 'Fusion'
  ];

  const locations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'
  ];

  const handleGenreToggle = (genre: string) => {
    const newGenres = filters.genres.includes(genre)
      ? filters.genres.filter(g => g !== genre)
      : [...filters.genres, genre];
    onFiltersChange({ genres: newGenres });
  };

  const clearFilters = () => {
    onFiltersChange({
      genres: [],
      location: '',
      priceRange: [0, 100000],
      rating: 0,
      availability: false,
      experience: 0
    });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50 lg:relative lg:translate-x-0 lg:shadow-none lg:bg-gray-50 lg:dark:bg-gray-900"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Filters
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Genres */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Genres
            </h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {genres.map((genre) => (
                <label key={genre} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.genres.includes(genre)}
                    onChange={() => handleGenreToggle(genre)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {genre}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Location
            </h4>
            <select
              value={filters.location}
              onChange={(e) => onFiltersChange({ location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Minimum Rating
            </h4>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={filters.rating}
              onChange={(e) => onFiltersChange({ rating: Number(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span>0</span>
              <span className="font-medium">{filters.rating}+</span>
              <span>5</span>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Minimum Experience (years)
            </h4>
            <input
              type="range"
              min="0"
              max="20"
              value={filters.experience}
              onChange={(e) => onFiltersChange({ experience: Number(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span>0</span>
              <span className="font-medium">{filters.experience}+</span>
              <span>20</span>
            </div>
          </div>

          {/* Availability */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.availability}
                onChange={(e) => onFiltersChange({ availability: e.target.checked })}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Only show available artists
              </span>
            </label>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default FilterSidebar;