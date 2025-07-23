import {
  AmazonwebservicesOriginalWordmark,
  BootstrapOriginal,
  CodeigniterPlain,
  CsharpOriginal,
  CsharpPlain,
  Css3Original,
  DockerOriginal,
  FigmaOriginal,
  GithubOriginal,
  GitOriginal,
  GodotOriginal,
  GoOriginal,
  Html5Original,
  JavaOriginal,
  JavaPlain,
  JavaPlainWordmark,
  JavascriptOriginal,
  LaravelOriginal,
  LinuxOriginal,
  MysqlOriginal,
  NestjsOriginal,
  NodejsOriginal,
  PhpOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  SpringOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  UnityOriginal,
  VercelLine,
  VercelOriginal,
  VercelOriginalWordmark,
} from "devicons-react";
import { Cctv } from "lucide-react";

const createSkill = (LogoComponent, name) => ({
  logo: <LogoComponent size={40} />,
  name,
});

const skills = {
  "Programming Languages": [
    createSkill(JavaOriginal, "Java"),
    createSkill(CsharpOriginal, "C#"),
    createSkill(JavascriptOriginal, "JavaScript"),
    createSkill(TypescriptOriginal, "TypeScript"),
    createSkill(GoOriginal, "Go"),
    createSkill(PhpOriginal, "PHP")
  ],
  Frontend: [
    createSkill(ReactOriginal, "React JS & Native"),
    createSkill(UnityOriginal, "Unity"),
    createSkill(GodotOriginal, "Godot"),
    createSkill(Html5Original, "HTML 5"),
    createSkill(TailwindcssOriginal, "Tailwind"),
    createSkill(BootstrapOriginal, "BootStrap"),
    createSkill(Css3Original, "CSS"),
  ],
  Backend: [
    createSkill(NestjsOriginal, "Nest JS"),
    createSkill(CodeigniterPlain, "Codeigniter"),
    createSkill(SpringOriginal, "SpringBoot"),
    createSkill(LaravelOriginal, "Laravel"),
  ],
  Database: [
    createSkill(PostgresqlOriginal, "PostgreSQL"),
    createSkill(MysqlOriginal, "MySQL"),
  ],
  "Tools & Others": [
    createSkill(GitOriginal, "Git"),
    createSkill(GithubOriginal, "Github"),
    createSkill(DockerOriginal, "Docker"),
    createSkill(LinuxOriginal, "Linux"),
    createSkill(AmazonwebservicesOriginalWordmark, "AWS"),
    createSkill(NodejsOriginal, "Node.js"),
    createSkill(VercelOriginal, "Vercel"),
    createSkill(FigmaOriginal, "Figma"),
    createSkill(Cctv, "CCTV Networking"),
  ],
};

export default skills;
