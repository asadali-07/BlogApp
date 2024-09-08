
import React from  "react" ;
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <div className="max-w-4xl w-full p-8 md:p-12 lg:p-16">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-purple-500">About Me</h1>
        <p className="text-lg mb-6 leading-relaxed text-center">
          Welcome to my programming blogs I am a passionate software developer with over 10 years of experience in the industry. I love sharing my knowledge and helping others learn about coding, software development, and the latest technologies
        </p>
        <p className=" text-lg mb-6 leading-relaxed text-center">
          On this blog, you wll find tutorials, tips, and insights on various programming languages, frameworks, and tools. Whether you are a beginner or an experienced developer, there as something here for everyone
        </p>
        <p className=" text-lg leading-relaxed text-center">
          Thank you for visiting, and I hope you find the content helpful and inspiring Happy codings
        </p>
      </div>
      <div className="max-w-4xl w-full p-8 md:p-12 lg:p-16 mt-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-purple-500">About the Owner</h2>
        <div className="flex flex-col items-center">
            <Image src="/WhatsApp Image 2024-09-07 at 5.31.19 PM.jpeg" alt="Owner" width={"128"} height={"128"} className=" rounded-full mb-4 shadow-lg" />
          <div className="text-center">
            <p className=" text-lg mb-4 leading-relaxed">
              Hi, I am Asad ALi, the creator of this blog. With a background in computer science and a passion for teaching, I aim to make complex topics accessible and enjoyable for everyone
            </p>
            <p className=" text-lg leading-relaxed">
              When I am not coding, you can find me exploring the outdoors, reading tech blogs, or experimenting with new recipes in the kitchen. Feel free to connect with me on social media or drop a message through the contact page
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;