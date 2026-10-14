import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full z-10 transition-colors duration-500">
      {/* HERO SECTION */}
      <HeroSection />

      {/* 01 / ABOUT */}
      <AboutSection />

      {/* 02 / SKILLS */}
      <SkillsSection />

      {/* 03 / PROJECTS */}
      <ProjectsSection />

      {/* 04 / ACHIEVEMENTS, HACKATHONS & CERTIFICATES */}
      <AchievementsSection />

      {/* 05 / BEYOND THE CODE */}
      <ExperienceSection />

      {/* 06 / CONTACT */}
      <ContactSection />

      {/* 07 / FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;
