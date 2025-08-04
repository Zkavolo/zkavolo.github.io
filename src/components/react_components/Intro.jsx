import { Typewriter } from "react-simple-typewriter";
import ProfilePic from "../pictures/ProfilePic.jpeg";
import { MapPin } from "lucide-react";

export default function Intro() {
  return (
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
              <p className="text-xs sm:text-sm font-semibold">Still Learning</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-100 mb-6">
            Yo, I'm <span className="text-blue-900">Axel Barlian</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-300 mb-6">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Software Engineer",
                "Web Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-base lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            I am a passionate software engineer with experience in frontend and
            backend. Skilled in building scalable web and mobile applications,
            integrating APIs, and optimizing performance. While i was in college
            i have developed a game that uses AI integration to compete with
            players on decision making.
          </p>

          <div className="flex items-center justify-center mb-8">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-600">Palembang, Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
