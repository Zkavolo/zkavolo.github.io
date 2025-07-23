import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Download,
  Linkedin,
  Twitter,
  CopyrightIcon,
  Phone,
  Layers,
} from "lucide-react";
import experiences from "../data/experince";
import skills from "../data/skills";
import projects from "../data/projects";
import ProfilePic from "../pictures/ProfilePic.jpeg";
import { useState } from "react";

export default function Main_Page() {
  const [hoveredSections, setHoveredSections] = useState({});

  const handleImageHover = (projectIndex, sectionIndex) => {
    setHoveredSections((prev) => ({ ...prev, [projectIndex]: sectionIndex }));
  };

  const handleImageLeave = (projectIndex) => {
    setHoveredSections((prev) => {
      const newState = { ...prev };
      delete newState[projectIndex];
      return newState;
    });
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section
        id="intro"
        className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={ProfilePic}
                  alt="ProfPic"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-br from-gray-700 to-black text-white p-2 sm:p-4 rounded-lg shadow-lg">
                <p className="text-xs sm:text-sm font-semibold">
                  Still Learning
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-100 mb-6">
              Yo, I'm <span className="text-blue-900">Axel Barlian</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-300 mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-base lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Passionate full-stack developer with experience in React js, React
              Native, and Java Springboot. Skilled in building scalable web and
              mobile applications, integrating APIs, and optimizing performance.
            </p>

            <div className="flex items-center justify-center mb-8">
              <MapPin className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-600">Palembang, Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_30%_300px,#fbfbfb36,#000)] pointer-events-none"></div>
        <div className="absolute left-0 right-[20%] bottom-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_70%_700px,#fbfbfb36,#000)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative ">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
              My Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black
                     hover:shadow-2xl hover:shadow-white/20 
                     hover:scale-105 hover:border-white hover:border-2
                     transition-all duration-300 ease-out
                     border border-gray-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="text-sm text-gray-300 font-semibold mb-1">
                      {exp.period}
                    </div>
                    <div className="gallery">
                      <img
                        src={exp.exp_pic}
                        alt="Default"
                        className="w-full h-full object-cover object-center"
                      />
                      <img
                        src={exp.company_pic}
                        alt="Default"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-sm text-gray-200">{exp.location}</div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold text-gray-100 mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-blue-900 font-semibold mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
        <div
          className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full 
  bg-[radial-gradient(circle_400px_at_50%_300px,rgba(255,255,255,0.1),rgba(0,0,0,0))] 
  filter blur-2xl pointer-events-none"
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
              Skills & Technologies
            </h2>
          </div>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold text-gray-200 mb-6">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      className="flex flex-col items-center w-20"
                      key={skillIndex}
                    >
                      <Card
                        className="p-3 bg-gray-200 border-2 border-blue-900
                        hover:shadow-2xl hover:shadow-white/20 
                        hover:scale-105 hover:border-blue-900 hover:border-2
                        transition-all duration-300 ease-out
                        flex items-center justify-center group"
                      >
                        <div className="transition-all duration-300 group-hover:scale-110">
                          {skill.logo}
                        </div>
                      </Card>
                      <h3 className="mt-3 text-sm font-medium text-gray-500 text-center">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
        <div
          className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full 
  bg-[radial-gradient(circle_400px_at_50%_300px,rgba(255,255,255,0.1),rgba(0,0,0,0))] 
  filter blur-2xl pointer-events-none"
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-200 mb-4">
              Projects That I Have Worked On
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, projectIndex) => {
              const isHovered = hoveredSections[projectIndex] !== undefined;
              const currentSection = hoveredSections[projectIndex];
              const activeContent = isHovered
                ? project.sections[currentSection]
                : project.default;
              const isOddProjects = projects.length % 2 !== 0;

              return (
                <Card
                  key={projectIndex}
                  className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black
                     hover:shadow-2xl hover:shadow-white/20 
                     hover:scale-105 hover:border-white hover:border-2
                     transition-all duration-300 ease-out
                     border border-gray-700 overflow-hidden group
                     ${
                       isOddProjects && projectIndex === projects.length - 1
                         ? "lg:col-span-2 lg:w-1/2 lg:mx-auto"
                         : ""
                     }`}
                >
                  <div
                    className="split-hover-image"
                    onMouseLeave={() => handleImageLeave(projectIndex)}
                  >
                    {project.sections.map((section, sectionIndex) => (
                      <img
                        key={sectionIndex}
                        src={section.image}
                        alt={`${section.title}`}
                        className="w-full h-full object-cover object-center"
                        onMouseEnter={() =>
                          handleImageHover(projectIndex, sectionIndex)
                        }
                      />
                    ))}
                  </div>
                  <CardContent className="p-6">
                    <div className="transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-200">
                          {activeContent.title}
                        </h3>
                        {!isHovered && (
                          <Layers className="h-5 w-5 text-gray-200" />
                        )}
                      </div>
                      <p className="text-gray-100 mb-4 leading-relaxed min-h-[4.5rem]">
                        {activeContent.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 min-h-[2.5rem]">
                        {activeContent.technologies.map((tech, techIndex) => (
                          <Badge
                            key={`${
                              isHovered ? currentSection : "default"
                            }-${techIndex}`}
                            variant={isHovered ? "secondary" : "default"}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {!isHovered && (
                        <div className="flex space-x-3">
                          {activeContent.liveUrl ? (
                            <Button
                              asChild
                              variant="secondary"
                              className="hover:bg-black hover:text-white hover:shadow-amber-50 transition-all ease-in-out duration-300"
                            >
                              <a href={activeContent.liveUrl}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Project
                              </a>
                            </Button>
                          ) : (
                            <Button variant="secondary" disabled>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Unavailable
                            </Button>
                          )}

                          {activeContent.githubUrl ? (
                            <Button
                              asChild
                              variant="outline"
                              className="hover:bg-black hover:text-white hover:shadow-amber-50 transition-all ease-in-out duration-300"
                            >
                              <a href={activeContent.githubUrl}>
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          ) : (
                            <Button variant="outline" disabled>
                              <Github className="h-4 w-4 mr-2" />
                              Unavailable
                            </Button>
                          )}
                        </div>
                      )}
                    </div>

                    {!isHovered && (
                      <p className="pt-4 text-center text-sm text-gray-400 mt-2 transition-opacity duration-300">
                        Hover over the image to know the journey
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer/Contact */}
      <footer className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-100">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open for freelance project, remote or other opportunites.
          </p>
          <div className="border-t border-gray-800 pt-8 mb-2">
            <p className="text-gray-400">Contact Information.</p>
            <p className="text-xs text-gray-300 max-w-2xl mx-auto">
              <Phone className="inline align-middle w-3 h-3 mx-1" /> +62
              822-7801-4722
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-2">
            <a
              href="https://github.com/Zkavolo  "
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/axel-barlian-1b99b0240/"
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-xs text-gray-300 mb-8 max-w-2xl mx-auto">
            Design and developed by Axel Barlian.{" "}
            <CopyrightIcon className="inline align-middle w-3 h-3 mx-1" /> 2025
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
