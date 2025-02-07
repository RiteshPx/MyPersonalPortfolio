import React from "react";
import img from "../assets/ritesh.png";

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 md:flex md:items-center md:justify-between">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-center text-white">Contact Me</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                <textarea id="message" name="message" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
            </form>
            <p className="mt-6 text-center text-gray-600">You can also reach me at: <a href="mailto:your-email@example.com" className="text-indigo-600 hover:underline">your-email@example.com</a></p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
            <img src={img} alt="Profile" className="h-48 w-48 md:h-80 md:w-80 rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;