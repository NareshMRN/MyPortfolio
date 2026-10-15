import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  useSeo({
    title: 'Naresh N — Full Stack & AI/ML Developer | Official Portfolio',
    description:
      'Official portfolio of Naresh N (NareshMRN), Full Stack & AI/ML Developer and Founder of Sangeetha based in Mangaluru, India. B.Tech CSE-IT at NIAT x Yenepoya University. Explore software projects, machine learning models, Kaggle competitions, hackathons, and certifications.',
    path: '/',
    image: '/og-image.jpg',
  });

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
