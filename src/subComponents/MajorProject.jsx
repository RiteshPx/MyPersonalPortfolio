import React from "react";
import {  MajorProjects  } from "../assets/dataContent/MajorProjects";
import edtech from '../assets/images/edtechImage.png';

export default function MajorProject() {
    const projects = MajorProjects;
return (
    <div className="min-h-screen  p-6 ">
        <h1 className="text-4xl mt-14 font-extrabold text-center mb-12 ">My Major Projects</h1>
        <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transform transition duration-500 hover:scale-105"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                    <img src={project.image} alt="imageProject" className="w-full h-48 object-cover rounded-md mb-4" />
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="list-disc list-inside text-gray-700 mb-4">
                        {project.features.map((feature, index) => (
                            <p className="text-start" key={index}>{feature}</p>
                        ))}
                    </div>
                    <p className="text-gray-900 font-semibold mt-4">🛠️ Tech Stack: {project.techStack}</p>
                    <div className="mt-6 flex justify-evenly">
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            🔗 Demo
                        </a>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                        >
                            🔗 Github
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}
