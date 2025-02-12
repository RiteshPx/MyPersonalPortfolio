import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 min-h-12">
        <p>Designed and Developed by Ritesh Parmar</p>
        <p className="mb-4">&copy; {new Date().getFullYear()} Ritesh Parmar. All rights reserved.</p>
        {/* <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="https://github.com/RiteshPx/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/ritesh-parmar-772229311/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;