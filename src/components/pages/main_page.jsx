import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Linkedin,
  CopyrightIcon,
  Phone,
  Layers,
} from "lucide-react";
import skills from "../data/skills";
import projects from "../data/projects";
import { useState } from "react";
import Intro from "@/components/react_components/Intro.jsx";
import Work_Exp from "../react_components/Work_Exp";
import Skill from "../react_components/Skill";
import Project from "../react_components/Project";

export default function Main_Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <Intro />
      {/* Work Experience Section */}
      <Work_Exp />
      {/* Skills Section */}
      <Skill />
      {/* Projects Section */}
      <Project/>
      {/* Footer/Contact */}
    </div>
  );
}
