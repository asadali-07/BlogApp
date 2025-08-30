import { cookies } from "next/headers";
import User from "@/app/models/user.model";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET(request) {
  await connectDB();
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    console.log("No token found");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET || "default_secret");
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
