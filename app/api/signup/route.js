import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/app/models/user.model";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    await connectDB();
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    // Create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "7d" }
    );

    // Set cookie
    const cookieStore = cookies();
    cookieStore.set("token", token, {
      httpOnly: true, // prevents client-side JS access
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict",
      path: "/", // cookie available everywhere
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return Response.json({ message: "Signup successful", user: { name, email } });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
