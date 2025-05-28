import React from 'react'

const TermsOfService = () => {
  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 inline-block my-10">Terms of Service</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Please read these terms carefully</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-purple-100 dark:border-purple-900/30">
            <p className="text-gray-600 dark:text-gray-400">Last updated: May 29, 2025</p>
            <div className="h-10 w-10 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          </div>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing or using our blog, you agree to be bound by these Terms and all applicable laws and regulations. 
              If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Use License
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">Permission is granted to temporarily download one copy of the materials on our blog for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              
              <ul className="space-y-3 my-6 pl-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Modify or copy the materials</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Use the materials for any commercial purpose</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Attempt to decompile or reverse engineer any software on our blog</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Remove any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</span>
                </li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300">This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Content and Submissions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Users may post comments and other content as long as the content is not illegal, obscene, threatening, defamatory, 
              invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl my-4">
              <p className="text-gray-700 dark:text-gray-300 italic">
                &quot;We reserve the right (but not the obligation) to remove or edit such content, at our sole discretion.&quot;
              </p>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Accuracy of Materials
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The materials appearing on our blog could include technical, typographical, or photographic errors. 
              We do not warrant that any of the materials on our blog are accurate, complete, or current. 
              We may make changes to the materials contained on our blog at any time without notice.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We have not reviewed all of the sites linked to our blog and are not responsible for the contents of any such linked site. 
              The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Modifications
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may revise these terms of service for our blog at any time without notice. 
              By using our blog, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Limitation of Liability
            </h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Your access to or use of or inability to access or use our services</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Any conduct or content of any third party on our services</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Any unauthorized access, use or alteration of your transmissions or content</span>
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Contact Us
            </h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <a 
                href="mailto:terms@yourblog.com" 
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                mo.asadali007@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService