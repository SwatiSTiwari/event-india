import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Music, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Artist } from '../../types';

interface ArtistCardProps {
  artist: Artist;
  onClick?: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/artists/${artist.id}`);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
    >
      <div className="relative">
        <img
          src={artist.profileImage}
          alt={artist.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            artist.availability 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {artist.availability ? 'Available' : 'Busy'}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{artist.rating}</span>
          </div>
        </div>

        {/* Verification Badge */}
        {artist.verificationStatus === 'verified' && (
          <div className="absolute top-3 left-3">
            <div className="bg-blue-500 text-white rounded-full p-1">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {artist.name}
        </h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm">{artist.location}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {artist.genre.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
            >
              {genre}
            </span>
          ))}
          {artist.genre.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
              +{artist.genre.length - 2}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {artist.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Users className="h-4 w-4" />
            <span>{artist.experience}+ yrs</span>
          </div>
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            {artist.priceRange}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtistCard;