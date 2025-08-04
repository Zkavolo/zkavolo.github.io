import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Layers } from "lucide-react";
import projects from "../data/projects";
import { useState } from "react";

export default function Project() {
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
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
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
  );
}
