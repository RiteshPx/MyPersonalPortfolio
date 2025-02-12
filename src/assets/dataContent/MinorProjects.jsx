import React from "react";
import meme from '../images/meme.png'
import testinomial from "../images/testimonials.png";
import course from "../images/courses.png";
import tour from "../images/tour.png";
import edtech from "../images/edtechImage.png"
import stylescan from "../images/stylescan.png"


const MinorProjects = [
  {
    id: 0,
    highlight:1,
    title: "📚 EdTech Platform",
    description: "An e-learning platform for buying & uploading courses.",
    features: [
      "✅ Students can purchase courses, and Instructors can upload courses with custom pricing.",
      "✅ Students can rate courses and leave comments for better learning experiences.",
      "✅ Secure payment gateway, user authentication, and password reset for seamless access.",
    ],
    techStack: "MERN (MongoDB, Express.js, React.js, Node.js), Tailwind CSS",
    image: edtech,
    demoLink: "https://edtech-h1p6.onrender.com/",
    githubLink: "https://github.com/RiteshPx/EdTech"
  },
  {
    id: 11,
    title: "🛒 E-commerce Platform",
    description: "An e-commerce platform for easy product purchasing with Razorpay integration.",
    features: [
      "🛒 Users can browse, add products to cart, and purchase.",
      "💳 Secure payments via Razorpay.",
      "🔄 Seamless shopping experience."
    ],
    techStack: ["React.js", "Redux","JavaScript", "Tailwind CSS"],
    image: course,
    githubLink: "https://github.com/RiteshPx/E-commerce",
    demoLink: "https://username.github.io/ecommerce-platform"
  },
  {
    id: 1,
    title: "😂 GIF & Meme Generator",
    description: "A fun web app to search and generate random GIFs & memes.",
    features: ["🔍 Search any GIF or meme", "🎲 Generate random memes & GIFs", "⚡ Quick, easy, and fun to use!"],
    techStack: ["React.js", "JavaScript", "CSS", "LocalStorage"],
    image: meme,
    githubLink: "https://github.com/RiteshPx/MemeProject",
    demoLink: "https://riteshpx.github.io/MemeProject/"
  },
  {
    id: 2,
    title: "🗣️ Testimonials Slider",
    description: "An interactive slider showcasing testimonials smoothly.",
    features: ["👤 View testimonials with name, job, and image", "⬅️➡️ Navigate with Next/Previous buttons", "✨ Smooth and engaging experience!"],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage"],
    image: testinomial,
    githubLink: "https://github.com/RiteshPx/OurTestimonial",
    demoLink: "https://riteshpx.github.io/OurTestimonial"
  },
  
  {
    id: 4,
    title: "🚀 Trip Budget Analysis",
    description: "A simple tool to calculate and analyze trip expenses.",
    features: [
      "📊 Get a clear budget breakdown",
      "✅ Plan smarter, travel better!"
    ],
    techStack: ["React.js", "JavaScript", "CSS", "LocalStorage"],
    image: tour,
    demoLink: "https://your-demo-link.com",
    githubLink: "https://riteshpx.github.io/MakeTripPlan"
  },
  {
    title: "🛍️ Stylescan-Outfit Recommender",
   description: "An AI-powered fashion suggestion tool for users to find the best outfit combinations.",
   features: ["👗 AI-based outfit recommendations", "🎨 Color and style matching", "🚀 No real images, just smart suggestions!"],
   techStack: ["React.js", "JavaScript", "CSS", "LocalStorage"],
   image: stylescan,
   githubLink: "https://github.com/username/stylescan",
  //  demoLink: "https://github.com/RiteshPx/StyleScan"
 },
 
];
  
  export default MinorProjects;