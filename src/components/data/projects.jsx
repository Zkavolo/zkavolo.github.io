import HelmifyMobile from "../pictures/Helmify_mobile.jpeg";
import HelmifyBackEnd from "../pictures/Helmify_backend.jpeg";
import HelmifyStructure from "../pictures/Helmify_structure.jpeg";
import VttpDB from "../pictures/vttp_db.jpeg";
import VttpHighlight from "../pictures/vttp_highlight.jpeg";
import VttpLandingPage from "../pictures/vttp_landingpage.jpeg";
import ClassicoLandingPage from "../pictures/Classico.jpeg";
import ClassicoFrontEnd from "../pictures/Classico_frontend.jpeg";
import ClassicoBackEnd from "../pictures/Classico_backend.jpeg";
import IchibanKujiLogin from "../pictures/IchibanKuji_Login.jpeg";
import IchibanKujiGallery from "../pictures/IchibanKuji_gallery.jpeg";
import IchibanKujiBanners from "../pictures/IchibanKuji_banners.jpeg";
import TuringHealthAPI from "../pictures/turinghealth_API.jpeg";
import TuringHealthOverview from "../pictures/turinghealth_Overview.jpeg";
import TuringHealthTransaction from "../pictures/turinghealth_transaction.jpeg";
import ExchangeAPIFront from "../pictures/Exchange_api_front.jpeg";
import ExchangeAPIDB from "../pictures/Supabase.jpeg";
import ExchangeAPIBack from "../pictures/Exchange_api_back.jpeg";

const projects = [
  {
    default: {
      title: "Simple Currecy Converter (2025)",
      description:
        "A simple currency converter that can convert between different currencies using the latest exchange rates.",
      technologies: [
        "Vue Js", "Tailwind", "TypeScript", "HTML", "CSS", "Supabase", "PostgreSQL", "Springboot", "Vercel", "Exchange API", "Docker",
      ],
      liveUrl: "https://v0-simple-currency-converter.vercel.app/",
      githubUrl: "https://github.com/Zkavolo/exchange-api-frontend",
    },
    sections: [
      {
        title: "Exchange API",
        description:
          "This API is used to get the latest exchange rates from various currencies. It is built using Springboot and uses PostgreSQL as its database. You can also find the source code on this link https://github.com/Zkavolo/exchange-api-backend.",
        technologies: ["Springboot", "PostgreSQL", "Docker", "API"],
        image: ExchangeAPIBack,
      },
      {
        title: "Frontend Structure",
        description:
          "The frontend is built using Vue Js and Tailwind CSS. It is a simple and responsive design that allows users to easily convert between different currencies.",
        technologies: ["Vue Js", "Tailwind", "TypeScript", "HTML", "CSS"],
        image: ExchangeAPIFront,
      },
      {
        title: "Database Structure",
        description:
          "The database is built using PostgreSQL and is hosted on Supabase. It contains the latest exchange rates for various currencies.",
        technologies: ["PostgreSQL", "Supabase"],
        image: ExchangeAPIDB,
      },
    ],
  },
  {
    default: {
      title: "VTTP (Validated Tech Talent Pool) (2024)",
      description:
        "This application serves as a platform to introduce OutSource company talent profiles to IT companies seeking high-quality candidates. It enables clients to evaluate and select talents that best match their requirements.",
      technologies: [
        "React Js",
        "TypeScript",
        "WebSocket",
        "Tailwind",
        "Springboot",
        "PostgreSQL",
        "Swagger",
        "Docker",
        "RailWay",
      ],
      liveUrl: "https://techtalentmarket.com/",
      githubUrl: "https://github.com/syahiidkamil/WEB-turingcamp-vttp",
    },
    sections: [
      {
        title: "Features Highlight",
        description:
          "A lot of features that is targeted to every role. Most notable features are the hiring process, assestment, live chat with admins, the ability for staffs or trainers to endorse talents and the ability to see detailed talent profiles.",
        technologies: ["React Js", "TypeScript", "WebSocket", "Tailwind"],
        liveUrl: "",
        githubUrl: "",
        image: VttpHighlight,
      },
      {
        title: "Initial Landing Page",
        description:
          "The App has a modern React landing page. Users that can log in is separated by 4 roles which is admin, talent, staff and client to focus the feature according to their needs.",
        technologies: [
          "React Js",
          "TypeScript",
          "WebSocket",
          "Tailwind",
          "Docker",
          "RailWay",
          "Nginx",
        ],
        liveUrl: "",
        githubUrl: "",
        image: VttpLandingPage,
      },
      {
        title: "Structured Database",
        description:
          "The system utilizes a database consisting of more than 30 normalized tables designed to ensure data integrity, minimal redundancy, and optimized performance during data transfer.",
        technologies: ["PostgreSql"],
        liveUrl: "",
        githubUrl: "",
        image: VttpDB,
      },
    ],
  },
  {
    default: {
      title: "Helmify (Prototype) (2024)",
      description:
        "IoT based Project that is developed and designed for efficient helment cleaning services. Users can access the machines via helmify mobile application, by just simply scanning the machine user can already use the machine cleaning service with a touch of a button.",
      technologies: [
        "React Js",
        "React Native",
        "JavaScript",
        "Springboot",
        "PostgreSQL",
        "Arduino",
        "Nginx",
        "Swagger",
        "Docker",
        "Redis",
      ],
      liveUrl: "",
      githubUrl: "",
    },
    sections: [
      {
        title: "Machine Structure",
        description:
          "Machine is equipped with an LCD to give the state of the machine, a buzzer to notify user of it's cleaning progress, water pumps to clean the helm, servo to control the sprayer, blower to dry the helm and all of this is powered and controlled by an ESP8266.",
        technologies: ["Arduino", "nginx"],
        image: HelmifyStructure,
      },
      {
        title: "Mobile Application",
        description:
          "The mobile application has several functions available, which is scanning the machine via QR code to use and choose it's services and locate vending machine via map.",
        technologies: ["React Native", "JavaScript", "Docker"],
        image: HelmifyMobile,
      },
      {
        title: "Backend Structure",
        description:
          "The Backend structure uses Swagger for documentation. It has 4 states of transactions that controls triggres the machine if it is succesful and doesn't toggle if the transactions failed or cancelled",
        technologies: ["Springboot", "Swagger", "Docker", "Redis"],
        image: HelmifyBackEnd,
      },
    ],
  },
  {
    default: {
      title: "Ichiban Kuji (Prototype) (2024)",
      description:
        "Ichiban Kuji was a mobile-based application that uses Kotlin as it's main framework. Users can collect action figures of their favorite anime characters. The app has coin features that can be used to partipate in a gacha roll to obtain random figures. The animation is made using LottieFiles via json file and users can experience the scratch card feature to reveal the rarity of the figure.",
      technologies: ["Kotlin", "Supabase", "Lottiefiles", "O-Auth"],
      liveUrl: "",
      githubUrl: "",
    },
    sections: [
      {
        title: "Banners Page",
        description:
          "Users can select up to 3 banners to pull with their own unique characters",
        technologies: ["Kotlin", "Lottiefiles"],
        liveUrl: "",
        githubUrl: "",
        image: IchibanKujiBanners,
      },
      {
        title: "Login Screen",
        description:
          "There are 2 ways to login which is using normal login procedure and using Google account via O-Auth",
        technologies: ["Kotlin", "O-Auth"],
        liveUrl: "",
        githubUrl: "",
        image: IchibanKujiLogin,
      },
      {
        title: "Gallery Page",
        description:
          "Users can also view the rarity and variety of figures they can get on each banner.",
        technologies: ["Kotlin", "Lottiefiles"],
        liveUrl: "",
        githubUrl: "",
        image: IchibanKujiGallery,
      },
    ],
  },
  {
    default: {
      title: "Classico (2022)",
      description:
        "Web Based Project that is used for students to sign up and use Classico services. Users can sign up to 3 different training services with their own benefits and price. They can also managed their availability by using the website to change training dates and time.",
      technologies: ["Codeigniter 3", "Bootstrap", "CSS", "PHP", "MySQL"],
      liveUrl: "",
      githubUrl: "https://github.com/cvdigitalcreative/KP_Web_Classico",
    },
    sections: [
      {
        title: "Frontend Structure",
        description:
          "This app frontend uses pure css for it's style and animation as well as using the bootstrap library",
        technologies: ["Bootstrap", "CSS", "PHP", "JQuery"],
        image: ClassicoFrontEnd,
      },
      {
        title: "Initial Landing Page",
        description:
          "This landing page is used to tell users about the classico program and other user testimonies.",
        technologies: ["Bootstrap", "CSS", "JQuery"],
        image: ClassicoLandingPage,
      },
      {
        title: "Backend Structure",
        description:
          "The Backend structure uses Codeigniter libraries to handle certain services. It uses MySQL as it's database and all managed using phpmyadmin",
        technologies: ["PHP", "MySQL"],
        image: ClassicoBackEnd,
      },
    ],
  },
  {
    default: {
      title: "Turing Health (Backend) (2024)",
      description:
        "Turing Health is a Springboot based aplication. User can use it to keep up with their personal health problems. This app is equipped with REST API that can be use to do transactions, upload images of profile and search out medical supplements",
      technologies: [
        "Springboot",
        "API Platform",
        "PostgreSQL",
        "PostMan",
        "Swagger",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/AlanPratama/turing-health-spring-boot",
    },
    sections: [
      {
        title: "Backend Config",
        description:
          "A lot of features that is targeted to every role. Most notable features are the hiring process, assestment, live chat with admins, the ability for staffs or trainers to endorse talents and the ability to see detailed talent profiles.",
        technologies: ["Springboot", "API Platform"],
        liveUrl: "",
        githubUrl: "",
        image: TuringHealthAPI,
      },
      {
        title: "Main Features",
        description:
          "Users can buy medical products for treatments, consult with available doctore via application, checks nearest hospitals and update their profiles.",
        technologies: ["Springboot"],
        liveUrl: "",
        githubUrl: "",
        image: TuringHealthOverview,
      },
      {
        title: "Transactional Process",
        description:
          "Transactional process are divided into 5 states to ensure user confidentiality, trust and service. It is mandatory that the user follow these steps to ensure a smooth transaction process",
        technologies: ["Springboot", "API Platform", "PostgreSQL", "PostMan"],
        liveUrl: "",
        githubUrl: "",
        image: TuringHealthTransaction,
      },
    ],
  },
];

export default projects;

// {
//     default: {
//       title: "Enter Title Here",
//       description:
//         "Enter Description Here",
//       technologies: [
//         "Enter Technology Here",
//       ],
//       liveUrl: "",
//       githubUrl: "",
//     },
//     sections: [
//       {
//         title: "Enter Section Title Here",
//         description:
//           "Enter Section Description Here",
//         technologies: ["Enter Technology Here"],
//         image: ,
//       },
//       {
//         title: "Enter Section Title Here",
//         description:
//           "Enter Section Description Here",
//         technologies: ["Enter Technology Here"],
//         image: ,
//       },
//       {
//         title: "Enter Section Title Here",
//         description:
//           "Enter Section Description Here",
//         technologies: ["Enter Technology Here"],
//         image: ,
//       },
//     ],
//   },
