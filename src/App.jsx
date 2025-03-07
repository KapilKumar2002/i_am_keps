import Banner from "./components/molecules/Banner";
import ContactSection from "./components/molecules/ContactSection";
import EducationSection from "./components/molecules/EducationSection";
import ExperienceSection from "./components/molecules/ExperienceSection";
import Footer from "./components/molecules/Footer";
import Navbar from "./components/molecules/Navbar";
import ProjectSection from "./components/molecules/ProjectSection";
import SkillSection from "./components/molecules/SkillSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Parent route
//     children: [
//       { path: "", element: <Banner /> },
//       { path: "mail", element: <Mailbox /> },
//       { path: "github", element: <GithubProjects /> },
//       { path: "linkedin", element: <LinkedIn /> },
//       { path: "skills", element: <Launchpad /> },
//     ],
//   },

//   // {
//   //   path: "*",
//   //   element: <Loader />,
//   // },
// ]);
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
