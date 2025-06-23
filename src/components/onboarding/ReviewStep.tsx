import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, User, Music, Image, Star } from 'lucide-react';

interface ReviewStepProps {
  formData: any;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Review Your Profile
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please review your information before submitting your artist profile.
        </p>
      </div>

      <div className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <User className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Basic Information
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500 dark:text-gray-400">Name:</span>
              <span className="ml-2 text-gray-900 dark:text-white font-medium">
                {formData.name}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Email:</span>
              <span className="ml-2 text-gray-900 dark:text-white font-medium">
                {formData.email}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Phone:</span>
              <span className="ml-2 text-gray-900 dark:text-white font-medium">
                {formData.phone}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Location:</span>
              <span className="ml-2 text-gray-900 dark:text-white font-medium">
                {formData.location}
              </span>
            </div>
          </div>
          {formData.description && (
            <div className="mt-4">
              <span className="text-gray-500 dark:text-gray-400 block mb-1">About:</span>
              <p className="text-gray-900 dark:text-white text-sm">
                {formData.description}
              </p>
            </div>
          )}
        </div>

        {/* Skills & Experience */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Music className="h-5 w-5 text-secondary-600 dark:text-secondary-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Skills & Experience
            </h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <span className="text-gray-500 dark:text-gray-400 block mb-2">Genres:</span>
              <div className="flex flex-wrap gap-2">
                {formData.genre?.map((genre: string) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-gray-500 dark:text-gray-400 block mb-2">Skills:</span>
              <div className="flex flex-wrap gap-2">
                {formData.skills?.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Experience:</span>
                <span className="ml-2 text-gray-900 dark:text-white font-medium">
                  {formData.experience} years
                </span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Price Range:</span>
                <span className="ml-2 text-gray-900 dark:text-white font-medium">
                  {formData.priceRange}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Image className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Portfolio & Social Media
            </h3>
          </div>
          
          <div className="space-y-4">
            {formData.profileImage && (
              <div>
                <span className="text-gray-500 dark:text-gray-400 block mb-2">Profile Image:</span>
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-500 dark:text-gray-400 block mb-1">Images:</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {formData.portfolio?.images?.length || 0} files
                </span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block mb-1">Videos:</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {formData.portfolio?.videos?.length || 0} files
                </span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400 block mb-1">Audio:</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {formData.portfolio?.audio?.length || 0} files
                </span>
              </div>
            </div>
            
            {formData.socialMedia && (
              <div>
                <span className="text-gray-500 dark:text-gray-400 block mb-2">Social Media:</span>
                <div className="space-y-1 text-sm">
                  {Object.entries(formData.socialMedia).map(([platform, handle]) => (
                    handle && (
                      <div key={platform}>
                        <span className="capitalize text-gray-600 dark:text-gray-400">
                          {platform}:
                        </span>
                        <span className="ml-2 text-gray-900 dark:text-white">
                          {handle as string}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
        <div className="flex items-start">
          <Star className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
              What happens next?
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-200">
              After submitting your profile, our team will review your information and verify your credentials. 
              You'll receive an email notification once your profile is approved and live on the platform.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewStep;