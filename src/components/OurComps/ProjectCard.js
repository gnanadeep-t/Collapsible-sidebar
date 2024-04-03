import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ProjectCard = (props) => {
  return (
    <Card className="bg-customGrayCard border-2 rounded-md w-auto flex-grow">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.customer}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name">{props.name}</label>
            <input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between w-full p-3">
        <Button variant="outline">{props.deadline}</Button>
        <Button className="bg-primary text-customGrayBackground">{props.name}</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
