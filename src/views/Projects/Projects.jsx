import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="This Website"
        description="I made this website for HCS Comp 2020"
        link=""
      />
      <Project
        title="GitHub"
        description="A link to my GitHub User"
        link="https://github.com/DArena3"
      />
    </div>
  );
}
