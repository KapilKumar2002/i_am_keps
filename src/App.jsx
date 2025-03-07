// import React, { Suspense } from "react";
// import LaptopFrame from "./components/molecules/LaptopFrame";
// import Layout from "./components/molecules/Layout";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { Banner } from "./components/molecules/Banner";
// import Mailbox from "./pages/MailBox";
// import GithubProjects from "./pages/GithubProjects";
// import LinkedIn from "./pages/LinkedIn";
// import Launchpad from "./pages/Launchpad";
// import useWindowWidth from "./hooks/useWindowWidth";
// import { MobilePhoneFrame } from "./components";
// import Footer from "./newsrc/Footer";
// import Banner from "./newsrc/Banner";
// import SkillSection from "./newsrc/SkillSection";
// import ExperienceSection from "./components/molecules/ExperienceSection";
// import ContactSection from "./components/molecules/ContactSection";
// import ProjectSection from "./components/molecules/ProjectSection";

import Banner from "./components/molecules/Banner";
import ContactSection from "./components/molecules/ContactSection";
import ExperienceSection from "./components/molecules/ExperienceSection";
import Footer from "./components/molecules/Footer";
import Navbar from "./components/molecules/Navbar";
import ProjectSection from "./components/molecules/ProjectSection";
import SkillSection from "./components/molecules/SkillSection";

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
      {/* {windowWidth < 750 ? (
        <div className="h-screen w-screen flex justify-center items-center ">
          <MobilePhoneFrame>
            <RouterProvider className={"duration-300"} router={router} />
          </MobilePhoneFrame>
        </div>
      ) : (
        <LaptopFrame>
          <RouterProvider className={"duration-300"} router={router} />
        </LaptopFrame>
      )} */}
      <div className="flex flex-col gap-12">
        <Navbar />
        <Banner />
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
