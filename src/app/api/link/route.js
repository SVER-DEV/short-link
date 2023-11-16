import { NextResponse } from "next/server";
import { headers } from "next/headers";

const linkController = require("../../../../db/linkInfo");

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req) {
  const requestBody = await req.json();
  const ua = req.headers.get("user-agent");

  const headersList = headers();
  const ip = headersList.get("x-forwarded-for");

  const originalUrl = requestBody["originalUrl"];

  const randomString = (length) => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    return result.join("");
  };

  const stringthing = randomString(5);

  const links = new linkController({
    originalUrl: originalUrl,
    shortUrl: stringthing,

    requestClient: [
      {
        clientIp: ip,
        userAgent: ua,
      },
    ],
  });

  links.save();

  return NextResponse.json(stringthing);
}
