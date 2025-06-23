import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus, Calendar, Star } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover Artists',
      description: 'Browse through our curated collection of talented artists across various genres and styles.'
    },
    {
      icon: UserPlus,
      title: 'Connect & Book',
      description: 'Reach out to artists directly, discuss your requirements, and finalize booking details.'
    },
    {
      icon: Calendar,
      title: 'Plan Your Event',
      description: 'Coordinate with your chosen artist to plan the perfect performance for your special occasion.'
    },
    {
      icon: Star,
      title: 'Enjoy & Review',
      description: 'Experience an amazing performance and share your feedback to help other event organizers.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting started with Eventful India is simple. Follow these easy steps to find and book the perfect artist for your event.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 rounded-full transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative mx-auto w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center mb-6 border-4 border-primary-100 dark:border-primary-900"
                >
                  <step.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;