"use client"
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import Typed from 'typed.js';
import { useEffect, useRef } from'react';
import Image from "next/image";


export default function Home() {
  const el = useRef(null);
   useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Computer Science', 'Information Technology', 'Software Engineering', 'Data Science', 'Artificial Intelligence', 'Machine Learning', 'Web Development','Mobile Development','Game Development','UX/UI Design'],
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
      description: "A comprehensive guide to understanding and using React Hooks in your projects.",
      slug: "understanding-react-hooks",
      author: "Jane Doe",
      date: "2024-08-15",
      image: "/pexels-photo-574071.webp"
    },
    {
      title: "Next.js: The Ultimate Guide",
      description: "Learn everything you need to know about Next.js, the React framework for production.",
      slug: "nextjs-ultimate-guide",
      author: "John Smith",
      date: "2024-07-20",
      image: "/pexels-photo-1181677.webp"
    },
    {
      title: "Tailwind CSS: Utility-First CSS Framework",
      description: "Discover the power of Tailwind CSS and how it can help you build modern, responsive designs.",
      slug: "tailwind-css-utility-first",
      author: "Alice Johnson",
      date: "2024-06-10",
      image: "/pexels-photo-1181298.jpeg"
    }
  ];
  return (
    <>
    <main>
    <section className="containerpx-4 py-10  mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
    <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
  <h1 className="text-3xl leading-snug  text-purple-500  ml-4 md:text-4xl">
    A <span className="font-semibold">free websites</span> for users <br className="hidden lg:block" /> to read blog <span className="font-semibold  decoration-primary"  ref={el}></span>
  </h1>
  <p className="mt-4 text-lg  ml-4">
    A good websites for reading  <br className="hidden lg:block" /> daily blogs of all of the world
  </p>
</div>
<div className="w-full mt-4 lg:mt-0 lg:w-1/2">
  <Image src="/website-designer-bro-purple.svg" alt="tailwind css components" height={'448'} width={'448'} className=" max-w-md mx-auto" />
</div>
</section>
<section>
<div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold text-center mb-2  text-purple-500">Pricing Plans</h1>
  <p className="text-center mb-6">Choose the plan that suit you best</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:border-2 hover:border-purple-500 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4  text-purple-500">Basic Plan</h2>
      <ul className=" mb-4 animate-features">
        <li>$10/month</li>
        <li>10GB Storage</li>
        <li>Basic Support</li>
        <li>Single User</li>
        <li>Community Access</li>
        <li>Weekly Updates</li>
        <Button className="mt-4" variant="secondary">Choose Plan</Button>
      </ul>
    </div>
    <div className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:border-2 hover:border-purple-500 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4  text-purple-500">Standard Plan</h2>
      <ul className=" mb-4 animate-features">
        <li>$20/month</li>
        <li>10GB Storage</li>
        <li>Basic Support</li>
        <li>Single User</li>
        <li>Community Access</li>
        <li>Weekly Updates</li>
        <Button className="mt-4" variant="secondary">Choose Plan</Button>
      </ul>
    </div>
    <div className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:border-2 hover:border-purple-500 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4  text-purple-500 ">Premium Plan</h2>
      <ul className=" mb-4 animate-features">
        <li>$30/month</li>
        <li>10GB Storage</li>
        <li>Basic Support</li>
        <li>Single User</li>
        <li>Community Access</li>
        <li>Weekly Updates</li>
        <Button className="mt-4" variant="secondary">Choose Plan</Button>
      </ul>
    </div>
  </div>
</div>


<style jsx>{`
  .animate-features li {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-in-out forwards;
  }

  .animate-features li:nth-child(1) {
    animation-delay: 0.1s;
  }

  .animate-features li:nth-child(2) {
    animation-delay: 0.2s;
  }

  .animate-features li:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style> 
</section>

   <section className=" py-12">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold text-center mb-8  text-purple-500">Top Blogs</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {blogs.map((blog, index) => (
            <div key={index} className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl  hover:border-2 hover:border-purple-500 ">
              <Image src={blog.image} alt={blog.title} height={'192'} width={'400'}  className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold mt-4 text-purple-500">{blog.title}</h2>
              <p className="text-gray-700 mt-2">{blog.description}</p>
              <div className="mt-4">
                <p className="text-gray-600">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
              </div>
              <div className="mt-3">
      <Link href={"/blog"}  className={buttonVariants({ variant: "outline" })}>Read More</Link>
      </div>
            </div>
          ))}
    </div>
  </div>
</section>

<section className="py-6">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold text-center text-purple-500 mb-8">What Our Clients Say</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-purple-500">
        <Image src="/pexels-photo-415829.webp" height={'192'} width={'346'} alt="Client 1" className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-2xl font-bold mt-4  text-purple-500">Leena</h2>
        <p className=" mt-2">This is a fantastic service Highly recommended</p>
      </div>
      <div className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-purple-500">
        <Image src="/pexels-photo-2379005.jpeg" height={'192'} width={'346'} alt="Client 2" className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-2xl font-bold mt-4  text-purple-500"> Smith</h2>
        <p className=" mt-2">Amazing experience! Will definitely use again</p>
      </div>
      <div className="dark:border border-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-purple-500">
        <Image src="/pexels-photo-1239291.jpeg" alt="Client 3" height={'192'} width={'346'} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-2xl font-bold mt-4  text-purple-500">John Doe</h2>
        <p className=" mt-2">Exceptional service and support Five stars</p>
      </div>
    </div>
  </div>
</section>
    </main>
    </>
  );
}

