import { Card } from "@/components/ui/card";
import skills from "../data/skills";

export default function Skill() {
  return (
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
  );
}
