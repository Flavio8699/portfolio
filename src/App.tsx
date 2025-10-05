import Navbar from './components/NavBar'
import AboutMeSection from './pages/AboutMeSection';
import EducationSection from './pages/EducationSection';
import ExperienceSection from './pages/ExperienceSection';
import ProjectsSection from './pages/ProjectsSection';
import SkillsSection from './pages/SkillsSection';
import LanguagesSection from './pages/LanguagesSection';
import InterestsSection from './pages/InterestsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 bg-dots text-white">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-5">
        <AboutMeSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LanguagesSection />
        <InterestsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
