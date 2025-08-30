import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const cookieStore = cookies();
  cookieStore.delete("token");
  return NextResponse.json({ message: "Logged out successfully" });
}
