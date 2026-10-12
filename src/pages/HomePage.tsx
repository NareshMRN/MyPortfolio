import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { SocialIcons } from '../components/SocialIcons';
import { PERSONAL_INFO } from '../data/content';

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
      <footer
        className="relative py-14 px-6 sm:px-10 lg:px-16 border-t transition-colors duration-500"
        style={{
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-display text-xl tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-xs font-mono-code" style={{ color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Built with intent.
            </span>
          </div>

          {/* Social Icons row in footer */}
          <div className="flex items-center gap-6">
            <SocialIcons size="sm" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
