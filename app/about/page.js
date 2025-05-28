import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden py-16 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* About Blog Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 inline-block">
                About My Blog
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl transform -rotate-6"></div>
                    <Image 
                      src="/blogging.png"
                      alt="Blog Concept"
                      width={300}
                      height={300}
                      className="relative mx-auto transform transition-all duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <p className="text-lg mb-6 leading-relaxed">
                    Welcome to my programming blog! I am a passionate software developer with over 10 years of experience in the industry. I love sharing my knowledge and helping others learn about coding, software development, and the latest technologies.
                  </p>
                  <p className="text-lg mb-6 leading-relaxed">
                    On this blog, you&apos;ll find tutorials, tips, and insights on various programming languages, frameworks, and tools. Whether you&apos;re a beginner or an experienced developer, there&apos;s something here for everyone.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Thank you for visiting, and I hope you find the content helpful and inspiring. Happy coding!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Owner Section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 inline-block">
                About the Owner
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl transform transition-all duration-500 group-hover:scale-110"></div>
                    <div className="relative ring-4 ring-purple-500/50 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 rounded-full overflow-hidden transform transition-all duration-500 group-hover:scale-105">
                      <Image 
                        src="/WhatsApp Image 2024-09-07 at 5.31.19 PM.jpeg" 
                        alt="Asad Ali" 
                        width={200} 
                        height={200}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Asad Ali
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 mt-12 md:mt-0">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Hi, I&apos;m Asad Ali, the creator of this blog. With a background in computer science and a passion for teaching, I aim to make complex topics accessible and enjoyable for everyone.
                    </p>
                    <p className="text-lg leading-relaxed">
                      When I&apos;m not coding, you can find me exploring the outdoors, reading tech blogs, or experimenting with new recipes in the kitchen. Feel free to connect with me on social media or drop a message through the contact page.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">JavaScript</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">React</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">Next.js</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">Node.js</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">UI/UX</div>
                    </div>
                    
                    <div className="flex space-x-4 mt-6">
                      <a href="https://www.linkedin.com/in/mohd-asad-ali-1a7693257/" className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors transform hover:-translate-y-1 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/heyy.asad__/" className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors transform hover:-translate-y-1 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="mailto:mo.asadali007@gmail.com" className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 p-2 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors transform hover:-translate-y-1 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;