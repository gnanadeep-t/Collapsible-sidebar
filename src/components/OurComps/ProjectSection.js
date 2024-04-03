import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div 
    // className="flex justify-evenly flex-wrap w-full overflow-hidden "
    className="w-full rounded-md flex  flex-wrap gap-6 h-96"
    >
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
      <ProjectCard title='Project title' name='customer' deadline='deadline'/>
    </div>
  );
};

export default ProjectSection;
