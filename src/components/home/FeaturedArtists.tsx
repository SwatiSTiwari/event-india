import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Music } from 'lucide-react';
import { mockArtists } from '../../utils/mockData';

const FeaturedArtists: React.FC = () => {
  const featuredArtists = mockArtists.slice(0, 3);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Artists
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover some of our most talented and highly-rated performers across various genres
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={artist.profileImage}
                  alt={artist.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    artist.availability 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {artist.availability ? 'Available' : 'Busy'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{artist.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {artist.name}
                </h3>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{artist.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.genre.slice(0, 2).map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                  {artist.genre.length > 2 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                      +{artist.genre.length - 2}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {artist.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {artist.priceRange}
                  </div>
                  <Link
                    to={`/artists/${artist.id}`}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/artists"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Music className="h-5 w-5 mr-2" />
            View All Artists
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArtists;