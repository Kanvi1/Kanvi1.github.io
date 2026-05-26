import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      {/* Animated Shader Mesh Background */}
      <AnimatedBackground />

      {/* Custom Mouse Cursor */}
      <CustomCursor theme={theme} />

      {/* Navigation Menu */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Content Layout */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* Bio Details */}
        <About />

        {/* Core Expertise */}
        <Skills />

        {/* Professional Milestones */}
        <Experience />

        {/* Portfolio Showcase */}
        <Projects />

        {/* Wins / Accomplishments */}
        <Achievements />

        {/* Recommendations / Quotes */}
        <Testimonials />

        {/* Feedback / Send Formspree Message */}
        <Contact />
      </main>
    </>
  );
}
