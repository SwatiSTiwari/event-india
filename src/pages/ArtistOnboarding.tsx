import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import StepIndicator from '../components/onboarding/StepIndicator';
import BasicInfoStep from '../components/onboarding/BasicInfoStep';
import SkillsStep from '../components/onboarding/SkillsStep';
import PortfolioStep from '../components/onboarding/PortfolioStep';
import ReviewStep from '../components/onboarding/ReviewStep';

const ArtistOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { addArtist, addNotification } = useAppStore();

  const steps = [
    'Basic Information',
    'Skills & Experience',
    'Portfolio & Social Media',
    'Review & Submit'
  ];

  const updateFormData = (data: any) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name && formData.email && formData.phone && formData.location && formData.description;
      case 1:
        return formData.genre?.length > 0 && formData.skills?.length > 0 && formData.experience >= 0 && formData.priceRange;
      case 2:
        return formData.profileImage;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create artist object with proper image handling
    const newArtist = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      profileImage: formData.profileImage || 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      genre: formData.genre || [],
      location: formData.location,
      experience: formData.experience || 0,
      rating: 0,
      priceRange: formData.priceRange,
      availability: true,
      portfolio: formData.portfolio || { images: [], videos: [], audio: [] },
      socialMedia: formData.socialMedia || {},
      description: formData.description,
      skills: formData.skills || [],
      performanceHistory: [],
      verificationStatus: 'pending' as const,
      joinedDate: new Date().toISOString()
    };

    addArtist(newArtist);
    
    addNotification({
      type: 'verification',
      title: 'Profile Submitted Successfully!',
      message: 'Your artist profile has been submitted for review. We\'ll notify you once it\'s approved.',
      timestamp: new Date().toISOString(),
      read: false
    });

    setIsSubmitting(false);
    navigate('/artists');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BasicInfoStep formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <SkillsStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <PortfolioStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              Join as an Artist
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
              Create your profile and start connecting with event organizers
            </p>
          </div>

          <div className="p-8">
            <StepIndicator
              currentStep={currentStep}
              totalSteps={steps.length}
              steps={steps}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              {currentStep === steps.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className={`flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isStepValid() && !isSubmitting
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Submit Profile
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isStepValid()
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtistOnboarding;