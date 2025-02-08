import React from "react";
import MajorProject from "../subComponents/MajorProject";
import MinorProject from "../subComponents/MinorProject";

function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto p-6 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">My Recent Works</h2>
        <p className="text-center text-lg ">Here are a few projects I've worked on recently.</p>      
        <div className="s">
          <MajorProject />
          <MinorProject />
        </div>
      </div>
    </section> 
  );
}

export default Projects;