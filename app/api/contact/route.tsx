import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, message, email } = await req.json();

  try {
   const { data, error } = await resend.emails.send({
      from: "Portfolio message - <onboarding@resend.dev>",
      to: "hei.ryan.3@gmail.com",
      subject: `Message from ${name} - ${email}`,
      replyTo: email,
      text: message
  });

    if(error) {
      return NextResponse.json(
        { message: "Email sending failed", data },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:" + error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}