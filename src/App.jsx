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
import { useState } from "react";
import Loader from "./components/atoms/Loader";
const App = () => {
  const [isLoad, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 5000);
  return isLoad ? (
    <Loader />
  ) : (
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
