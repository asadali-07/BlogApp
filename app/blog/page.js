"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

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
              Discover insightful articles, tutorials, and the latest trends in
              technology and programming.
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="space-y-8">
              {/* Loading message */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
                  <div className="relative">
                    <div className="w-8 h-8 border-4 border-purple-200 dark:border-purple-800 rounded-full animate-spin">
                      <div className="absolute top-0 left-0 w-8 h-8 border-4 border-transparent border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin"></div>
                    </div>
                  </div>
                  <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                    Loading amazing content...
                  </span>
                </div>
              </div>

              {/* Skeleton cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl animate-pulse"
                  >
                    {/* Skeleton image */}
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-9 w-full h-48 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800"></div>
                      <div className="absolute top-4 right-4 bg-purple-300 dark:bg-purple-700 w-16 h-6 rounded-full"></div>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Skeleton title */}
                      <div className="flex items-center mb-3">
                        <div className="w-1 h-6 bg-purple-400 dark:bg-purple-600 rounded-full mr-3"></div>
                        <div className="h-6 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded w-3/4"></div>
                      </div>

                      {/* Skeleton description */}
                      <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded w-full"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded w-5/6"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded w-4/6"></div>
                      </div>

                      {/* Skeleton footer */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded w-12"></div>
                          <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded w-20"></div>
                        </div>
                        <div className="h-9 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Loading dots animation */}
              <div className="text-center pt-8">
                <div className="inline-flex space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Blog grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
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
                        {new Date(blog.updatedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
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
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            By{" "}
                          </span>
                          <span className="ml-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                            {blog.author.name}
                          </span>
                        </div>

                        <Button
                          asChild
                          variant="outline"
                          className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 transform group-hover:-translate-y-1"
                        >
                          <Link href={`/blogpost/${blog.slug}`}>
                            <span className="flex items-center">
                              Read More
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    No blog posts found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Check back soon for new content or make sure your content
                    directory is set up correctly.
                  </p>
                  <Button
                    asChild
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Link href="/">Return Home</Link>
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;