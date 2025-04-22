import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!process.env.SALT) {
    return NextResponse.json({
      success: false,
      message: "ENV тохиргоонд алдаа гарлаа!",
      code: "NO_ENV",
      data: {},
    });
  }
  try {
    const userExistsbyEmail = await prisma.findUnique({
      where: { email: body.email },
      omit: { password: true, phoneNumber: true, email: true },
    });
    const userExistbyNumber = await prisma.findUnique({
      where: { phoneNumber: body.phoneNumber },
      omit: { password: true, phoneNumber: true, email: true },
    });

    if (userExistsbyEmail) {
      return NextResponse.json({
        success: false,
        message: "Бүртгэлтэй мэйл хаяг байна.",
        code: "USER_ALREADY_EXIST",
        data: { name: userExistsbyEmail.id },
      });
    }

    if (userExistbyNumber) {
      return NextResponse.json({
        success: false,
        message: "Бүртгэлтэй утасны дугаар байна.",
        code: "USER_ALREADY_EXIST",
        data: { name: userExistbyNumber.id },
      });
    }

    const { password } = body;
    const encryptedPass = await bcrypt.hash(password, Number(process.env.SALT));
    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: encryptedPass,
      },
      omit: { password: true, phoneNumber: true, email: true },
    });
    return NextResponse.json({
      success: true,
      message: "Амжилттай бүртгэгдлээ!",
      code: "NEW_USER",
      data: { userId: newUser.id },
    });
  } catch (error) {
    console.error("Сервер дээр алдаа гарлаа!");
    return NextResponse.json({
      success: false,
      message: "Сервер дээр алдаа гарлаа!",
      code: "API_ERROR",
      data: null,
    });
  }
}
