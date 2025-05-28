import React from 'react'
import Link from 'next/link'

const Sitemap = () => {
  // Define your site's main structure here
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Blog Categories",
      links: [
        { name: "Web Development", path: "/blog/category/web-development" },
        { name: "Software Engineering", path: "/blog/category/software-engineering" },
        { name: "Data Science", path: "/blog/category/data-science" },
        { name: "Artificial Intelligence", path: "/blog/category/ai" },
        { name: "UX/UI Design", path: "/blog/category/ux-ui-design" },
      ]
    },
    {
      title: "Featured Articles",
      links: [
        { name: "Understanding React Hooks", path: "/blog/understanding-react-hooks" },
        { name: "Next.js: The Ultimate Guide", path: "/blog/nextjs-ultimate-guide" },
        { name: "Tailwind CSS: Utility-First CSS Framework", path: "/blog/tailwind-css-utility-first" },
      ]
    },
    {
      title: "Legal Pages",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Cookie Policy", path: "/cookies" },
      ]
    },
  ];

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 inline-block my-10">Sitemap</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Navigate our entire website with ease</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900">
          <div className="flex items-center justify-center mb-8 pb-4 border-b border-purple-100 dark:border-purple-900/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-purple-500 rounded-full mr-3"></span>
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="group">
                      <Link href={link.path} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400 dark:text-purple-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
            <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">Looking for something specific?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you can&apos;t find what you&apos;re looking for, feel free to use our search feature or contact us directly.
            </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-purple-300 dark:border-purple-700 text-sm font-medium rounded-md text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap