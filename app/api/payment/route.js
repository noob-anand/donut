import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";

export async function POST(req) {
  try {
    const body = await req.json();


    const { name, to_user, amount, message } = body;

    if (!name || !to_user || !amount) {
      return NextResponse.json(
        { error: "name, to_user and amount are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const payment = await Payment.create({
      name: String(name),
      to_user: String(to_user),
      amount: String(amount),
      message: message ? String(message) : "",
      done: false,
    });

    

    return NextResponse.json({ success: true, payment });
  } catch (err) {
    console.error("❌ PAYMENT ERROR:", err.message);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
