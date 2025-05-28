import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter'
import Image from 'next/image';
import path from "path";

const Blog = async () => {
  const dirPath = path.join(process.cwd(), "public/content");
  const files = fs.readdirSync(dirPath);

  const blogs = files.map((file) => {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    return data;
  });

  return (
    <main className="min-h-screen relative overflow-hidden py-16 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 inline-block">
              Explore Our Blog
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover insightful articles, tutorials, and the latest trends in technology and programming.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={index} 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:shadow-purple-500/20 hover:translate-y-[-8px]"
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-purple-600/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-6 bg-purple-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {blog.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">By </span>
                      <span className="ml-1 text-sm font-medium text-purple-600 dark:text-purple-400">{blog.author}</span>
                    </div>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 transform group-hover:-translate-y-1"
                    >
                      <Link href={`/blogpost/${blog.slug}`}>
                        <span className="flex items-center">
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No blog posts fallback */}
          {blogs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-purple-500 dark:text-purple-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">No blog posts found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check back soon for new content or make sure your content directory is set up correctly.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          )}
          
          {/* Pagination (if needed in the future) */}
          {blogs.length > 0 && blogs.length > 6 && (
            <div className="mt-16 flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm">
                <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Previous
                </a>
                <a href="#" className="px-3 py-2 border-t border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-purple-600 dark:text-purple-400">
                  1
                </a>
                <a href="#" className="px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                  2
                </a>
                <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Next
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Blog;