import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart, Star, Music, Calendar, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Artists', value: '2,500+', color: 'text-blue-600' },
    { icon: Calendar, label: 'Events Hosted', value: '15,000+', color: 'text-green-600' },
    { icon: Globe, label: 'Cities Covered', value: '50+', color: 'text-purple-600' },
    { icon: Star, label: 'Average Rating', value: '4.9', color: 'text-yellow-600' },
  ];

  const features = [
    {
      icon: Music,
      title: 'Diverse Talent Pool',
      description: 'From classical maestros to contemporary performers, discover artists across all genres and styles.'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book your favorite artists in minutes with our streamlined booking process and real-time availability.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All artists are verified and rated by our community to ensure the highest quality performances.'
    },
    {
      icon: Heart,
      title: 'Personalized Experience',
      description: 'Our AI-powered recommendations help you find the perfect artist for your unique event needs.'
    }
  ];

  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former music industry executive with 15+ years of experience in artist management and event production.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Tech visionary who previously built scalable platforms for major entertainment companies.'
    },
    {
      name: 'Anita Desai',
      role: 'Head of Artist Relations',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Artist advocate with deep connections in the Indian music scene and passion for emerging talent.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Bringing Music to{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Eventful India is the premier platform connecting exceptional artists with unforgettable events across the nation. 
              We believe in the power of music to transform moments into memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-700 mb-4 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Eventful India?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're more than just a booking platform - we're your partner in creating extraordinary events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate individuals dedicated to revolutionizing the event and entertainment industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 mx-auto"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Our Mission
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                "To democratize access to exceptional musical talent while empowering artists to build sustainable careers. 
                We envision a future where every celebration, no matter how big or small, can be elevated by the perfect musical experience."
              </p>
              <div className="mt-8 flex items-center justify-center space-x-2">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="text-gray-600 dark:text-gray-400 font-medium">Made with love in India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;