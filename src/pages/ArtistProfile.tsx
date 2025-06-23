import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, MapPin, Calendar, Users, Music, Award, 
  Phone, Mail, Instagram, Youtube, Globe, ArrowLeft,
  Play, Heart, Share2, MessageCircle
} from 'lucide-react';
import { useAppStore } from '../store/appStore';

const ArtistProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { artists } = useAppStore();
  
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Artist Not Found</h1>
          <Link to="/artists" className="text-primary-600 hover:text-primary-700">
            ← Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/artists"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Artists</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Artist Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={artist.profileImage}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Verification Badge */}
                {artist.verificationStatus === 'verified' && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-500 text-white rounded-full p-2">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Artist Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {artist.name}
                  </h1>
                  <div className="flex items-center space-x-4 text-white/90">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{artist.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{artist.experience}+ years</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.genre.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {artist.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Book Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Message</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Skills & Instruments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills & Instruments
              </h3>
              <div className="flex flex-wrap gap-2">
                {artist.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Portfolio
              </h3>
              
              {/* Images */}
              {artist.portfolio.images.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {artist.portfolio.images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                        <img
                          src={image}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Audio/Video placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center">
                  <Play className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Audio Samples</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center">
                  <Play className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Video Performances</p>
                </div>
              </div>
            </motion.div>

            {/* Performance History */}
            {artist.performanceHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Performance History
                </h3>
                <div className="space-y-4">
                  {artist.performanceHistory.map((performance) => (
                    <div key={performance.id} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {performance.eventName}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {performance.venue} • {new Date(performance.date).toLocaleDateString()}
                      </p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {performance.rating}/5
                        </span>
                      </div>
                      {performance.feedback && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                          "{performance.feedback}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Contact & Details */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">{artist.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">{artist.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Pricing
              </h3>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {artist.priceRange}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Base pricing for standard performances. Final pricing may vary based on event requirements.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Availability
              </h3>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                artist.availability
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {artist.availability ? 'Available for Booking' : 'Currently Busy'}
              </div>
            </motion.div>

            {/* Social Media */}
            {artist.socialMedia && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Follow {artist.name}
                </h3>
                <div className="space-y-3">
                  {artist.socialMedia.instagram && (
                    <a
                      href={`https://instagram.com/${artist.socialMedia.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>{artist.socialMedia.instagram}</span>
                    </a>
                  )}
                  {artist.socialMedia.youtube && (
                    <a
                      href={`https://youtube.com/${artist.socialMedia.youtube}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Youtube className="h-4 w-4" />
                      <span>{artist.socialMedia.youtube}</span>
                    </a>
                  )}
                  {artist.socialMedia.spotify && (
                    <a
                      href={`https://open.spotify.com/artist/${artist.socialMedia.spotify}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Music className="h-4 w-4" />
                      <span>Spotify</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;