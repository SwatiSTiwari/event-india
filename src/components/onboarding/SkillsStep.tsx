import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, Music } from 'lucide-react';

interface SkillsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const SkillsStep: React.FC<SkillsStepProps> = ({ formData, updateFormData }) => {
  const [customGenre, setCustomGenre] = useState('');
  const [customSkill, setCustomSkill] = useState('');

  const predefinedGenres = [
    'Classical', 'Bollywood', 'Rock', 'Pop', 'Folk', 'Jazz', 'Electronic', 
    'Hip Hop', 'Indie', 'Fusion', 'Blues', 'Country', 'Ghazal', 'Sufi'
  ];

  const predefinedSkills = [
    'Vocals', 'Guitar', 'Piano', 'Drums', 'Bass', 'Violin', 'Flute', 
    'Harmonium', 'Tabla', 'Sitar', 'Saxophone', 'Keyboard', 'Stage Performance', 
    'Songwriting', 'Music Production', 'Sound Engineering'
  ];

  const handleGenreToggle = (genre: string) => {
    const currentGenres = formData.genre || [];
    const newGenres = currentGenres.includes(genre)
      ? currentGenres.filter((g: string) => g !== genre)
      : [...currentGenres, genre];
    updateFormData({ genre: newGenres });
  };

  const handleSkillToggle = (skill: string) => {
    const currentSkills = formData.skills || [];
    const newSkills = currentSkills.includes(skill)
      ? currentSkills.filter((s: string) => s !== skill)
      : [...currentSkills, skill];
    updateFormData({ skills: newSkills });
  };

  const addCustomGenre = () => {
    if (customGenre.trim() && !(formData.genre || []).includes(customGenre.trim())) {
      const newGenres = [...(formData.genre || []), customGenre.trim()];
      updateFormData({ genre: newGenres });
      setCustomGenre('');
    }
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !(formData.skills || []).includes(customSkill.trim())) {
      const newSkills = [...(formData.skills || []), customSkill.trim()];
      updateFormData({ skills: newSkills });
      setCustomSkill('');
    }
  };

  const removeGenre = (genre: string) => {
    const newGenres = (formData.genre || []).filter((g: string) => g !== genre);
    updateFormData({ genre: newGenres });
  };

  const removeSkill = (skill: string) => {
    const newSkills = (formData.skills || []).filter((s: string) => s !== skill);
    updateFormData({ skills: newSkills });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Your Musical Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select your genres and skills to help event organizers find you.
        </p>
      </div>

      {/* Genres */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Musical Genres *
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
          {predefinedGenres.map((genre) => (
            <motion.button
              key={genre}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleGenreToggle(genre)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                (formData.genre || []).includes(genre)
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-500'
              }`}
            >
              {genre}
            </motion.button>
          ))}
        </div>

        {/* Custom Genre Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={customGenre}
            onChange={(e) => setCustomGenre(e.target.value)}
            placeholder="Add custom genre"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && addCustomGenre()}
          />
          <button
            type="button"
            onClick={addCustomGenre}
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Selected Genres */}
        {(formData.genre || []).length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Selected Genres:
            </h4>
            <div className="flex flex-wrap gap-2">
              {(formData.genre || []).map((genre: string) => (
                <span
                  key={genre}
                  className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                >
                  {genre}
                  <button
                    type="button"
                    onClick={() => removeGenre(genre)}
                    className="ml-2 text-primary-500 hover:text-primary-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Skills & Instruments *
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
          {predefinedSkills.map((skill) => (
            <motion.button
              key={skill}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSkillToggle(skill)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                (formData.skills || []).includes(skill)
                  ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-secondary-300 dark:hover:border-secondary-500'
              }`}
            >
              {skill}
            </motion.button>
          ))}
        </div>

        {/* Custom Skill Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            placeholder="Add custom skill"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()}
          />
          <button
            type="button"
            onClick={addCustomSkill}
            className="px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Selected Skills */}
        {(formData.skills || []).length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Selected Skills:
            </h4>
            <div className="flex flex-wrap gap-2">
              {(formData.skills || []).map((skill: string) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-secondary-500 hover:text-secondary-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Experience & Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Years of Experience *
          </label>
          <input
            type="number"
            min="0"
            max="50"
            value={formData.experience || ''}
            onChange={(e) => updateFormData({ experience: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price Range (₹) *
          </label>
          <select
            value={formData.priceRange || ''}
            onChange={(e) => updateFormData({ priceRange: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">Select price range</option>
            <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
            <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
            <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
            <option value="₹50,000 - ₹100,000">₹50,000 - ₹100,000</option>
            <option value="₹100,000+">₹100,000+</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsStep;