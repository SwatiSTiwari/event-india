import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppStore } from './store/appStore';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtistProfile from './pages/ArtistProfile';
import ArtistOnboarding from './pages/ArtistOnboarding';
import Events from './pages/Events';
import About from './pages/About';

function App() {
  const { darkMode } = useAppStore();

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="artists" element={<Artists />} />
            <Route path="artists/:id" element={<ArtistProfile />} />
            <Route path="artist-onboarding" element={<ArtistOnboarding />} />
            <Route path="events" element={<Events />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;