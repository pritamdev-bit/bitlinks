import connectDB from "@/dbconfig/connectDB";
import Url from "@/models/UrlModel";
import { NextResponse } from "next/server";
connectDB();

export async function POST(request) {
    try {
        const { url, shortLink } = await request.json();
        console.log(url, shortLink);
    
        if (url && shortLink) {
            //check if short link already exists
            const shortLinkExists = await Url.findOne({ shortLink });
            if (shortLinkExists) {
                return NextResponse.json({ message: "Short link already exists", success: false }, { status: 500 });
            }
            
            // create new url
            const newUrl = new Url({ url, shortLink });
            await newUrl.save();
    
            return NextResponse.json({ data: newUrl, message: "URL created successfully", success: true }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Please enter both URL and short link", success: false }, { status: 400 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong", success: false }, { status: 501 });
    }
}
