import UNV from "../pictures/unv_logo.jpg"
import UNV_EXP from "../pictures/unv_exp.jpeg"
import ENIGMA from "../pictures/enigma_camp_logo.jpg"
import ENIGMA_EXP from "../pictures/enigma_exp.jpeg"
import DC from "../pictures/Digital_Creative.jpg"
import DC_EXP from "../pictures/Classico.jpeg"

const experiences = [
  {
    title: "Technical Support",
    company: "PT. Uniview Indonesia.",
    period: "Apr 2025- Jul 2025",
    exp_pic: UNV_EXP,
    company_pic: UNV,
    location: "Jakarta, Indonesia",
    description:
      "Supported the sales team by providing technical explanations of device functions to assist in customer understanding and sales conversion. Also Conducted comprehensive training sessions for both internal technical and sales teams as well as external partner stores, focusing on product introductions, features, and usage scenario",
    technologies: ["CCTV", "ODM", "Networking"],
  },
  {
    title: "Trainee",
    company: "Enigma Camp",
    period: "Jun 2024 - Jun 2025",
    exp_pic: ENIGMA_EXP,
    company_pic: ENIGMA,
    location: "Jakarta, Indonesia",
    description:
      "Learned how to develop applications using Spring Boot, React.js, and React Native in a Linux-based environment",
    technologies: ["React.js", "React Native", "Springboot", "Docker", "Postgresql", "Linux"],
  },
  {
    title: "Back-End Developer",
    company: "Cv. Digital Creative",
    period: "Jun 2022 - Jul 2022",
    exp_pic: DC_EXP,
    company_pic: DC,
    location: "Palembang, Indonesia",
    description:
      "Designed and developed a dynamic web application to manage and organize student schedules efficiently. Built and maintained the website’s back-end infrastructure.",
    technologies: ["Code Igniter 3", "PHP", "MySQL"],
  },
];

export default experiences;
