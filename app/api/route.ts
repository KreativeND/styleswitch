import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyA4ZHEeHdbjohDQ0c8ieh5bFyeQiVGsdF0");

export async function POST(request: Request) {
    const data = await request.json();
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = `act as css to tailwind convertor you will get css code and you will return in extact tailwind class only and dont add new line
        following is my css code:
        ${data.css}
    `
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return NextResponse.json({
        response: text
    })
}