import HeroSection from '../components/HeroSection';
import ScrollSection from '../components/ScrollSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ThreeSkillOrb from '../components/ThreeSkillOrb';
import AchievementsSection from '../components/AchievementsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollSection id="about"><AboutSection /></ScrollSection>
      <ScrollSection id="projects"><ProjectsSection /></ScrollSection>
      <ScrollSection id="skills"><ThreeSkillOrb /></ScrollSection>
      <ScrollSection id="achievements"><AchievementsSection /></ScrollSection>
      <ScrollSection id="contact"><ContactForm /></ScrollSection>
      <Footer />
    </>
  );
}
