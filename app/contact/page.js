
import React from 'react';

const ContactPage = () => {
  return (
    <>
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-purple-500 text-center animate-bounce">Get In Touch</h2>
        <div className="max-w-lg mx-auto p-8 flex gap-5 justify-center align-middle rounded-lg shadow-lg w-96 text-center">
          <div className="mb-4">
            <a href="mailto:mo.asadali007@gmail.com" className="text-blue-500 hover:underline">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
          <div className="mb-4">
            <a href="https://www.instagram.com/heyy.asad__/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <div className="mb-4">
            <a href="https://www.linkedin.com/in/mohd-asad-ali-1a7693257/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactPage;