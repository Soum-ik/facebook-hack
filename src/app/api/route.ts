import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();

        const data = await prisma.user.create({
            data: {
                email: reqBody.email,
                password: reqBody.password
            }
        })

        return NextResponse.json({ status: "Success", data: data });
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json({ status: "fail", error: error });
    }
}


