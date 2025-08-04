import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import experiences from "../data/experince";

export default function Work_Exp() {
  return (
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
  );
}
