import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur border-t  py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-xl font-bold mb-4  text-purple-500">Navigation</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-xl font-bold mb-4  text-purple-500">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    
      <div className="w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-4  text-purple-500">Contact Us</h2>
        <p className="mb-2">1234 Street Name, City, State, 12345</p>
        <p className="mb-2">Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer;
