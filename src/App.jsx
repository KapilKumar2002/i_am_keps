import Banner from "./components/molecules/Banner";
import ContactSection from "./components/molecules/ContactSection";
import ExperienceSection from "./components/molecules/ExperienceSection";
import Footer from "./components/molecules/Footer";
import Navbar from "./components/molecules/Navbar";
import ProjectSection from "./components/molecules/ProjectSection";
import SkillSection from "./components/molecules/SkillSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AchievementSection from "./components/molecules/AchievementSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <AchievementSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
