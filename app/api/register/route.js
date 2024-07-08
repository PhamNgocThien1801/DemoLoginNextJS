import { connectMongoDB } from "@/lib/mongodb";
import User from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({name, email, password: hashedPassword});

        return NextResponse.json({ message: "register success"}, {status: 201});
    } catch (error) {
        return NextResponse.json({ message: "register faild"}, {status: 500 });
    }
}