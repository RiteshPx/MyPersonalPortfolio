import React from "react";
import MinorProjects from "../assets/dataContent/MinorProjects";

const ProjectList = () => {
    const projects = MinorProjects;
    return (
        <div className="min-h-screen py-10 w-full justify-center content-center mb-0">
            <div className="flex justify-center flex-wrap gap-y-9 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="shadow-lg p-4 bg-white text-black transform transition duration-500 hover:scale-105 max-w-xs sm:max-w-sm mx-auto rounded-lg"
                    >
                        <h2 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h2>
                        <img
                            src={project.image}
                            alt="imageProject"
                            className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-600">{project.description}</p>
                        <ul className="mt-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="text-sm text-start text-gray-700">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex justify-evenly">
                            {project.demoLink && project.demoLink !== "" && (
                                <a
                                    href={project?.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                                >
                                    🔗 Demo
                                </a>
                            )}
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-600 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
                            >
                                🔗 Github
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
