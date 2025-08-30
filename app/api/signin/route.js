import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/app/models/user.model";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "7d" }
    );

    // Set cookie
    const cookieStore = cookies();
    cookieStore.set("token", token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production", 
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      path: "/", 
      maxAge: 7 * 24 * 60 * 60,
    });

    return Response.json({
      message: "Signin successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
