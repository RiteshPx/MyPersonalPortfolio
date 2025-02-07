import React from "react";

const projects = [
  {
    title: "📚 EdTech Platform",
    description: "A dynamic e-learning platform where students can buy courses and instructors can upload courses with custom pricing.",
    features: [
      "✅ Students can purchase courses.",
      "✅ Instructors can upload courses with custom pricing.",
      "✅ Feedback system for student ratings & comments.",
      "✅ Secure payment gateway for smooth transactions.",
      "✅ User authentication & password reset.",
    ],
    techStack: "MERN (MongoDB, Express.js, React.js, Node.js), Tailwind CSS",
    demoLink: "https://your-edtech-live-demo-link.com",
    githubLink: ""
  },
  // Add more projects in a similar way
  {
    title: "🌐 Another Project",
    description: "This is another awesome project description.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    techStack: "Tech Stack for this project",
    demoLink: "https://another-project-demo-link.com",
    githubLink: ""
  },
];

export default function MajorProject() {
return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6 ">
        <h1 className="text-4xl mt-14 font-extrabold text-center mb-12 text-gray-800">My Major Projects</h1>
        <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transform transition duration-500 hover:scale-105"
                >
                    <image src=" " alt=" " />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <p className="text-gray-900 font-semibold mt-4">🛠️ Tech Stack: {project.techStack}</p>
                    <div className="mt-6 flex justify-between">
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            🔗 View Demo
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
