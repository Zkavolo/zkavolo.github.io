import {
  Github,
  Linkedin,
  CopyrightIcon,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">
          Let's Work Together
        </h2>
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
  );
}
