import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectSection";

const HomePage = ({theme}) => {
  const location = useLocation();
  const studentData = location.state?.student;

  console.log("Received Data: ", studentData.projects);
  return (
    <>
      <HeroSection theme={theme} name={studentData.name} bio={studentData.bio} />
      <AboutMe
        profilePicture={studentData.profilePicture}
        description={studentData.description}
        skills={studentData.skills}
        theme={theme}
      />
      <ProjectsSection projects={studentData.projects} theme={theme}/>
      <ContactSection theme={theme} />
      <Footer socialMedia={studentData.socialMedia} theme={theme} />
    </>
  );
};

export default HomePage;
