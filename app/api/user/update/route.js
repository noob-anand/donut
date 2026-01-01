import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  await connectDB();

  const user = await User.findOneAndUpdate(
    { email: session.user.email }, // ✅ trusted
    {
      name: body.name,
      username: body.username,
      profilepic: body.profilepic,
      coverpic: body.coverpic,
      upi: body.upi,
      qr: body.qr,
    },
    { new: true }
  );

  return NextResponse.json({ success: true, user });
}
