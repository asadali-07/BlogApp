import { connectDB } from "@/lib/db";
import Blog from "@/app/models/blog.model";
import cloudinary from "@/lib/cloudnairy";
import {generateResponse} from "@/lib/gemini";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";


export async function GET() {
  await connectDB();
  const blogs = await Blog.find({})
    .select("-content")
    .populate("author", "name")
    .sort({ createdAt: -1 });
  return Response.json(blogs);
}
export async function POST(request) {
  await connectDB();
  const { title, description, slug, image } = await request.json();
  try {
    const [{ secure_url }, content] = await Promise.all([
      cloudinary.uploader.upload(image, {
        folder: "blog_images",
      }),
      generateResponse(title, description),
    ]);
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);

    const blog = new Blog({
      title,
      description,
      slug,
      image: secure_url,
      content,
      author: decoded.id,
    });
    await blog.save();
    return Response.json(
      { message: "Blog created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error generating response:", error);
    return Response.json({ message: "Failed to create blog" }, { status: 500 });
  }
}
