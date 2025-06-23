import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                index < currentStep
                  ? 'bg-primary-600 border-primary-600 text-white'
                  : index === currentStep
                  ? 'border-primary-600 text-primary-600 bg-white dark:bg-gray-800'
                  : 'border-gray-300 dark:border-gray-600 text-gray-400 bg-white dark:bg-gray-800'
              }`}
            >
              {index < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </motion.div>
            
            {index < totalSteps - 1 && (
              <div
                className={`h-1 w-16 md:w-24 mx-2 transition-all duration-300 ${
                  index < currentStep ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {steps[currentStep]}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Step {currentStep + 1} of {totalSteps}
        </p>
      </div>
    </div>
  );
};

export default StepIndicator;