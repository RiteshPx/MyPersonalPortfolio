import React from "react";
import meme from '../images/meme.png'
import testinomial from "../images/testimonials.png";
import course from "../images/courses.png";
import tour from "../images/tour.png";
const MinorProjects = [
    {
      id: 1,
      title: "😂 GIF & Meme Generator",
      description: "A fun web app to search and generate random GIFs & memes.",
      features: ["🔍 Search any GIF or meme", "🎲 Generate random memes & GIFs", "⚡ Quick, easy, and fun to use!"],
      techStack: ["React.js", "JavaScript", "CSS", "LocalStorage"],
      image:meme,
      githubLink: "https://github.com/username/gif-meme-generator",
      demoLink: "https://username.github.io/gif-meme-generator"
    },
    {
      id: 2,
      title: "🗣️ Testimonials Slider",
      description: "An interactive slider showcasing testimonials smoothly.",
      features: ["👤 View testimonials with name, job, and image", "⬅️➡️ Navigate with Next/Previous buttons", "✨ Smooth and engaging experience!"],
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage"],
      image: testinomial,
      githubLink: "https://github.com/username/testimonials-slider",
      demoLink: "https://username.github.io/testimonials-slider"
    },
    {
      id: 3,
      title: "🚀 Trip Budget Analysis",
      description: "A simple tool to calculate and analyze trip expenses.",
      features: ["📝 Enter estimated expenses", "📊 Get a clear budget breakdown", "✅ Plan smarter, travel better!"],
      techStack: ["React.js", "JavaScript", "Tailwind CSS"],
      image: tour,
      githubLink: "https://github.com/username/trip-budget-analysis",
      demoLink: "https://username.github.io/trip-budget-analysis"
    },    
    {
        id: 4,
        title: "🚀 Trip Budget Analysis",
        description: "A simple tool to calculate and analyze trip expenses.",
        detailedDescription: "I built a basic web app that helps users calculate their trip budget. Just enter your estimated expenses, and it gives you a clear breakdown. Simple and useful!",
        features: [
          "📊 Get a clear budget breakdown",
          "✅ Plan smarter, travel better!"
        ],
        techStack: ["React.js", "JavaScript", "CSS", "LocalStorage"],
        category: "Utility",
        image: course,
        demoLink: "https://your-demo-link.com",
        githubLink: "https://github.com/your-repo-link",
      }
  ];
  
  export default MinorProjects;