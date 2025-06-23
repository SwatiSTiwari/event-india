import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Star, Users, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Artists', value: '1,500+' },
    { icon: Calendar, label: 'Events Hosted', value: '10,000+' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full blur-xl opacity-70 animate-bounce-gentle"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent-200 rounded-full blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Discover{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Exceptional
              </span>{' '}
              Artists
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              Connect with India's most talented performers for your events. From classical maestros to contemporary stars, find the perfect artist to make your celebration unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/artists"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Artists
              </Link>
              
              <Link
                to="/artist-onboarding"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold rounded-xl border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
              >
                Join as Artist
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl mb-3">
                    <stat.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artists performing"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Artist"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Arjun Sharma</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Classical Vocalist</div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-4 right-4 w-72 h-72 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;