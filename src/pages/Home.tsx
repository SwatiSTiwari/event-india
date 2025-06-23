import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedArtists from '../components/home/FeaturedArtists';
import HowItWorks from '../components/home/HowItWorks';
import { useAppStore } from '../store/appStore';
import { mockArtists, mockEvents, mockManager } from '../utils/mockData';

const Home: React.FC = () => {
  const { artists, events, addArtist, addEvent, login } = useAppStore();

  useEffect(() => {
    // Initialize mock data if not already present
    if (artists.length === 0) {
      mockArtists.forEach(artist => addArtist(artist));
    }
    
    if (events.length === 0) {
      mockEvents.forEach(event => addEvent(event));
    }

    // Auto-login for demo purposes
    login(mockManager);
  }, [artists.length, events.length, addArtist, addEvent, login]);

  return (
    <div className="animate-fade-in">
      <Hero />
      <FeaturedArtists />
      <HowItWorks />
    </div>
  );
};

export default Home;