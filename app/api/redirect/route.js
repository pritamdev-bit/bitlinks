import connectDB from "@/dbconfig/connectDB";
import Url from "@/models/UrlModel";
import { NextResponse } from "next/server";
connectDB();

export async function POST(request) {
    try {
        const { slug } = await request.json();

        if (slug) {
            const url = await Url.findOne({ shortLink: slug });
            if (url) {
                return NextResponse.json({ data: url, message: "URL found", success: true }, { status: 200 });
            } else {
                return NextResponse.json({ message: "Short link not found", success: false }, { status: 404 });
            }
        }
    } catch (error) {
        NextResponse.json({ message: "Something went wrong", success: false }, { status: 501 });
    }
}