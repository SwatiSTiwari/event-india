import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import ArtistCard from '../components/artists/ArtistCard';
import FilterSidebar from '../components/artists/FilterSidebar';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Artists: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { artists, filteredArtists, artistFilters, setArtistFilters } =
    useAppStore();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [artistFilters]);

  const searchResults = useMemo(() => {
    let results = filteredArtists.length > 0 ? filteredArtists : artists;

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchLower) ||
          artist.genre.some((g) => g.toLowerCase().includes(searchLower)) ||
          artist.location.toLowerCase().includes(searchLower) ||
          artist.description.toLowerCase().includes(searchLower) ||
          artist.skills.some((s) => s.toLowerCase().includes(searchLower))
      );
    }

    return results;
  }, [artists, filteredArtists, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Artists
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find the perfect performer for your event from our curated
            collection of talented artists.
          </p>
        </motion.div>

        <div className="flex gap-8">
          {/* Sidebar (Desktop only) */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              filters={artistFilters}
              onFiltersChange={setArtistFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search artists, genres, or locations..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  {/* Filter Button (Mobile only) */}
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                  </button>

                  {/* View Toggle */}
                  <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                      }`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list'
                          ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Results Count */}
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {searchResults.length} artists found
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Artists Grid/List */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner size="lg" />
              </div>
            ) : searchResults.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {searchResults.map((artist, index) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ArtistCard artist={artist} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No artists found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search criteria or filters
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Sidebar (Only rendered on small screens) */}
        <div className="lg:hidden">
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={artistFilters}
            onFiltersChange={setArtistFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default Artists;
