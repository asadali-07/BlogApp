import React from 'react';
import { buttonVariants } from "@/components/ui/button"
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
