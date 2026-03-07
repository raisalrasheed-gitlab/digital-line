import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { fullName, email, phone, option, message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form",
            html: `
        <h2>New Message</h2>
        <p>Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Option: ${option}</p>
        <p>Message: ${message}</p>
      `
        });

        return Response.json({ success: true });

    } catch (error) {
        console.error(error);
        return Response.json({ success: false });
    }
}