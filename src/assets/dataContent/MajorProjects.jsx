import React from "react";
import edtech from "../images/edtechImage.png"
export const MajorProjects = [
    {
      title: "📚 EdTech Platform",
      description: "A dynamic e-learning platform where students can buy courses and instructors can upload courses.",
      features: [
        "✅ Students can purchase courses.",
        "✅ Instructors can upload courses with custom pricing.",
        "✅ Feedback system for student ratings & comments.",
        "✅ Secure payment gateway for smooth transactions.",
        "✅ User authentication & password reset.",
      ],
      techStack: "MERN (MongoDB, Express.js, React.js, Node.js), Tailwind CSS",
      image: edtech,
      demoLink: "https://edtech-h1p6.onrender.com/",
      githubLink: "https://github.com/RiteshPx/EdTech"
    },
    // Add more projects in a similar way
  
    {
       title: "🛍️ Stylescan-Outfit Recommender",
      description: "An AI-powered fashion suggestion tool for users to find the best outfit combinations.",
      features: ["👗 AI-based outfit recommendations", "🎨 Color and style matching", "🚀 No real images, just smart suggestions!"],
      techStack: ["React.js", "JavaScript", "CSS", "LocalStorage"],
      image: edtech,
      githubLink: "https://github.com/username/stylescan",
      demoLink: "https://username.github.io/stylescan"
    },
    {
      title: "🌐 Another Project",
      description: "This is another awesome project description.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      techStack: "Tech Stack for this project",
      image: edtech,
      demoLink: "https://another-project-demo-link.com",
      githubLink: ""
    },
  ];