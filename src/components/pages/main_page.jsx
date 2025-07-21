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
} from "lucide-react";
import experiences from "../data/experince";
import skills from "../data/skills";
import projects from "../data/projects";
import ProfilePic from "../pictures/ProfilePic.jpeg";

export default function Main_Page() {
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
                    <div class="gallery">
                      <img
                        src={exp.exp_pic}
                        alt="ProfPic"
                        className="w-full h-full object-cover object-center"
                      />
                      <img
                        src={exp.company_pic}
                        alt="ProfPic"
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
                        className="p-3 bg-black border-2 border-gray-200
                        hover:shadow-2xl hover:shadow-white/20 
                        hover:scale-105 hover:border-blue-900 hover:border-2
                        transition-all duration-300 ease-out
                        flex items-center justify-center group"
                      >
                        <div
                          className="transition-all duration-300 group-hover:scale-110 
                          [&>svg]:transition-all [&>svg]:duration-300 
                          group-hover:[&>svg]:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
                          group-hover:[&>svg]:filter"
                        >
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
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              creating great user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.githubUrl}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl}>
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Footer/Contact */}
      <footer className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open for freelance project, remote or other opportunites.
          </p>
          <div className="border-t border-gray-800 pt-8 mb-2">
            <p className="text-gray-400">Contact Information.</p>
          </div>
          <div className="flex justify-center space-x-4 mb-2">
            <a
              href="https://github.com/Zkavolo  "
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/axel-barlian-1b99b0240/"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
                href=""
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Phone className="h-6 w-6" />
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
