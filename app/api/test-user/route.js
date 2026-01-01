import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const user = await User.findOne({ username: "noob" }).lean();

  

  return NextResponse.json({
    found: !!user,
    user,
  });
}
