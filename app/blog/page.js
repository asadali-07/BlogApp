import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter'
import Image from 'next/image';


const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})
// const blogs = [
//   {
//     title: "Understanding React Hooks",
//     description: "A comprehensive guide to understanding and using React Hooks in your projects.",
//     slug: "understanding-react-hooks",
//     author: "Jane Doe",
//     date: "2024-08-15",
//     image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     title: "Next.js: The Ultimate Guide",
//     description: "Learn everything you need to know about Next.js, the React framework for production.",
//     slug: "nextjs-ultimate-guide",
//     author: "John Smith",
//     date: "2024-07-20",
//     image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   {
//     title: "Tailwind CSS: Utility-First CSS Framework",
//     description: "Discover the power of Tailwind CSS and how it can help you build modern, responsive designs.",
//     slug: "tailwind-css-utility-first",
//     author: "Alice Johnson",
//     date: "2024-06-10",
//     image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   // Add more blog posts as needed...
//   {
//     title: "Building a Progressive Web App with Next.js",
//     description: "Learn how to create a production-ready Progressive Web App using Next.js and deploy it on Vercel.",
//     slug: "building-progressive-web-app",
//     author: "Bob Brown",
//     date: "2024-05-20",
//     image: "https://images.pexels.com/photos/1280724/pexels-photo-1280724.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
//   // Add more blog posts as needed...
//   {
//     title: "Deploying a Next.js App on Vercel",
//     description: "Learn how to deploy your Next.js app to Vercel, a fully managed hosting platform.",
//     slug: "deploying-nextjs-app-vercel",
//     author: "Charlie Lee",
//     date: "2024-04-10",
//     image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//   },
//   // Add more blog posts as needed...
//   {
//     title: "Integrating Firebase Authentication with Next.js",
//     description: "Learn how to integrate Firebase Authentication with Next.js to secure your app's authentication flow.",
//     slug: "integrating-firebase-authentication",
//     author: "David Johnson",
//     date:"2024-04-10",
//     image: "https://images.pexels.com/photos/1511545/pexels-photo-1511545.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//   ];


const Blog = () => {
  return (
    <>
    <section className=" py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-500">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl  hover:border-2 hover:border-purple-500 ">
              <Image src={blog.image} alt={blog.title} height={'192'} width={'400'} className="object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4 text-purple-500">{blog.title}</h2>
              <p className="mt-2">{blog.description}</p>
              <div className="mt-4">
                <p className="">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
              </div>
              <div className="mt-3">
      <Link href={`/blogpost/${blog.slug}`}  className={buttonVariants({ variant: "outline" })}>Read More</Link>
      </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
