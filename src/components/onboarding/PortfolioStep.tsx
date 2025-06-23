import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Image, Video, Music, Instagram, Youtube, Globe } from 'lucide-react';

interface PortfolioStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const PortfolioStep: React.FC<PortfolioStepProps> = ({ formData, updateFormData }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleSocialMediaChange = (platform: string, value: string) => {
    const socialMedia = { ...(formData.socialMedia || {}), [platform]: value };
    updateFormData({ socialMedia });
  };

  const handleFileUpload = (type: 'images' | 'videos' | 'audio', files: FileList | null) => {
    if (!files) return;
    
    // In a real app, you would upload files to a server
    // For demo purposes, we'll just store file names
    const fileNames = Array.from(files).map(file => file.name);
    const portfolio = { ...(formData.portfolio || {}), [type]: fileNames };
    updateFormData({ portfolio });
  };

  const removePortfolioItem = (type: 'images' | 'videos' | 'audio', index: number) => {
    const portfolio = { ...(formData.portfolio || {}) };
    portfolio[type] = portfolio[type]?.filter((_: any, i: number) => i !== index) || [];
    updateFormData({ portfolio });
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
          Showcase Your Work
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Upload your portfolio and connect your social media to let clients see your talent.
        </p>
      </div>

      {/* Profile Image */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Profile Image *
        </h3>
        <div
          className={`relative w-32 h-32 mx-auto border-2 border-dashed rounded-full transition-colors ${
            dragOver 
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900' 
              : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            handleFileUpload('images', e.dataTransfer.files);
          }}
        >
          {formData.profileImage ? (
            <img
              src={formData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Upload Photo</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                // In a real app, you would upload the file and get a URL
                const fakeUrl = 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400';
                updateFormData({ profileImage: fakeUrl });
              }
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Portfolio Files */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Images */}
        <div>
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3 flex items-center">
            <Image className="h-4 w-4 mr-2" />
            Images
          </h4>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleFileUpload('images', e.target.files)}
              className="hidden"
              id="images-upload"
            />
            <label htmlFor="images-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Upload Images
              </span>
            </label>
          </div>
          {formData.portfolio?.images?.length > 0 && (
            <div className="mt-2 space-y-1">
              {formData.portfolio.images.map((image: string, index: number) => (
                <div key={index} className="flex items-center justify-between text-sm bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                  <span className="truncate">{image}</span>
                  <button
                    type="button"
                    onClick={() => removePortfolioItem('images', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Videos */}
        <div>
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3 flex items-center">
            <Video className="h-4 w-4 mr-2" />
            Videos
          </h4>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
            <input
              type="file"
              multiple
              accept="video/*"
              onChange={(e) => handleFileUpload('videos', e.target.files)}
              className="hidden"
              id="videos-upload"
            />
            <label htmlFor="videos-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Upload Videos
              </span>
            </label>
          </div>
          {formData.portfolio?.videos?.length > 0 && (
            <div className="mt-2 space-y-1">
              {formData.portfolio.videos.map((video: string, index: number) => (
                <div key={index} className="flex items-center justify-between text-sm bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                  <span className="truncate">{video}</span>
                  <button
                    type="button"
                    onClick={() => removePortfolioItem('videos', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Audio */}
        <div>
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3 flex items-center">
            <Music className="h-4 w-4 mr-2" />
            Audio
          </h4>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
            <input
              type="file"
              multiple
              accept="audio/*"
              onChange={(e) => handleFileUpload('audio', e.target.files)}
              className="hidden"
              id="audio-upload"
            />
            <label htmlFor="audio-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Upload Audio
              </span>
            </label>
          </div>
          {formData.portfolio?.audio?.length > 0 && (
            <div className="mt-2 space-y-1">
              {formData.portfolio.audio.map((audio: string, index: number) => (
                <div key={index} className="flex items-center justify-between text-sm bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                  <span className="truncate">{audio}</span>
                  <button
                    type="button"
                    onClick={() => removePortfolioItem('audio', index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Social Media Links
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Instagram
            </label>
            <div className="relative">
              <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={formData.socialMedia?.instagram || ''}
                onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="@your_username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              YouTube
            </label>
            <div className="relative">
              <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={formData.socialMedia?.youtube || ''}
                onChange={(e) => handleSocialMediaChange('youtube', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your Channel Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Spotify
            </label>
            <div className="relative">
              <Music className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={formData.socialMedia?.spotify || ''}
                onChange={(e) => handleSocialMediaChange('spotify', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="your-artist-name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="url"
                value={formData.socialMedia?.website || ''}
                onChange={(e) => handleSocialMediaChange('website', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://your-website.com"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioStep;