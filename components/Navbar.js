"use client";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./themeButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className="relative group">
      <span className={`transition-colors duration-300 ${isActive ? "text-purple-500 font-semibold" : "hover:text-purple-400"}`}>
        {children}
      </span>
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""}`}></span>
    </Link>
  );
};

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(50);
    }, 200);
    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`backdrop-blur transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${
      scrolled ? "bg-background/80 shadow-md py-2" : "bg-background/50 py-4"
    }`}>
      <LoadingBar
        color='#BC7CF9'
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold flex items-center gap-3 text-purple-500"
        >
          <Image 
            src="/blogging.png" 
            alt="logo" 
            width={32} 
            height={32} 
            className="transition-transform duration-500 hover:rotate-12" 
          />
          <Link href="/" className="text-2xl font-bold">
            <span className="font-normal italic">Blog</span>
            <span className="text-xs align-top ml-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded-full">AI</span>
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ModeToggle />
          </motion.div>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center md:hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mr-4"
          >
            <ModeToggle />
          </motion.div>
          
          <Sheet>
            <SheetTrigger className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent className="border-l border-purple-200 dark:border-purple-900">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-center text-2xl text-purple-500">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/blogging.png" alt="logo" width={28} height={28} />
                    <span className="italic">Blog</span>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col justify-center gap-8 items-center pt-6">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/about", label: "About" },
                      { href: "/blog", label: "Blog" },
                      { href: "/contact", label: "Contact" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-lg transition-all duration-300 hover:text-purple-500 ${
                          pathname === link.href ? "text-purple-500 font-medium" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
              
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} AI Blog
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;