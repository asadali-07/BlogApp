"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Computer Science",
        "Information Technology",
        "Software Engineering",
        "Data Science",
        "Artificial Intelligence",
        "Machine Learning",
        "Web Development",
        "Mobile Development",
        "Game Development",
        "UX/UI Design",
      ],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const blogs = [
    {
      title: "Understanding React Hooks",
      description:
        "A comprehensive guide to understanding and using React Hooks in your projects.",
      slug: "understanding-react-hooks",
      author: "Jane Doe",
      date: "2024-08-15",
      image: "/pexels-photo-574071.webp",
    },
    {
      title: "Next.js: The Ultimate Guide",
      description:
        "Learn everything you need to know about Next.js, the React framework for production.",
      slug: "nextjs-ultimate-guide",
      author: "John Smith",
      date: "2024-07-20",
      image: "/pexels-photo-1181677.webp",
    },
    {
      title: "Tailwind CSS: Utility-First CSS Framework",
      description:
        "Discover the power of Tailwind CSS and how it can help you build modern, responsive designs.",
      slug: "tailwind-css-utility-first",
      author: "Alice Johnson",
      date: "2024-06-10",
      image: "/pexels-photo-1181298.jpeg",
    },
  ];
  return (
    <>
      <main>
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 -right-24 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="max-w-xl mx-auto lg:mx-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span className="text-purple-600 dark:text-purple-400">
                    Discover
                  </span>{" "}
                  the world of
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                    {" "}
                    knowledge
                  </span>
                </h1>

                <div className="mt-4 h-16 sm:h-12">
                  <p className="text-2xl md:text-3xl font-medium text-purple-600 dark:text-purple-400 flex items-center justify-center lg:justify-start">
                    <span className="mr-2">Explore</span>
                    <span ref={el} className="font-bold"></span>
                  </p>
                </div>

                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                  Your daily source for insightful articles, tutorials, and the
                  latest trends from around the globe.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <Link href="/blog">Browse Articles</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image container */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <div className="relative p-4">
                  <Image
                    src="/website-designer-bro-purple.svg"
                    alt="AI Blog illustration"
                    height={560}
                    width={560}
                    className="mx-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 left-0 w-20 h-20 border-4 border-purple-200 dark:border-purple-800 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full -z-10 animate-bounce"></div>
            </div>
          </div>
        </section>

            <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 inline-block">
              What Our Readers Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
              Discover why our community loves our content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:shadow-purple-500/20 hover:translate-y-[-8px]">
              <div className="relative">
                <Image
                  src="/pexels-photo-415829.webp"
                  height={192}
                  width={346}
                  alt="Leena"
                  className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-10 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Leena</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &quot;This is a fantastic resource for staying updated with the latest in tech. The articles are insightful and well-researched. Highly recommended!&quot;
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-300 py-1 px-2 rounded-full text-xs">Regular Reader</span>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:shadow-purple-500/20 hover:translate-y-[-8px]">
              <div className="relative">
                <Image
                  src="/pexels-photo-2379005.jpeg"
                  height={192}
                  width={346}
                  alt="Smith"
                  className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-10 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Smith</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &quot;Amazing experience! The blog&apos;s content has helped me improve my coding skills substantially. The tutorials are clear and easy to follow. Will definitely continue reading!&quot;
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-300 py-1 px-2 rounded-full text-xs">Developer</span>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:shadow-purple-500/20 hover:translate-y-[-8px]">
              <div className="relative">
                <Image
                  src="/pexels-photo-1239291.jpeg"
                  height={192}
                  width={346}
                  alt="John Doe"
                  className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-10 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">John Doe</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &quot;Exceptional content and support. The articles are well-written and cover cutting-edge topics. The community discussions add even more value. Five stars!&quot;
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-300 py-1 px-2 rounded-full text-xs">Tech Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      </main>
    </>
  );
}
