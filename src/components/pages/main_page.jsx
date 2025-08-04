import Intro from "@/components/react_components/Intro.jsx";
import Work_Exp from "../react_components/Work_Exp";
import Skill from "../react_components/Skill";
import Project from "../react_components/Project";
import Footer from "../react_components/Footer";

export default function Main_Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <Intro />
      {/* Work Experience Section */}
      <Work_Exp />
      {/* Skills Section */}
      <Skill />
      {/* Projects Section */}
      <Project/>
      {/* Footer/Contact */}
      <Footer/>
    </div>
  );
}
