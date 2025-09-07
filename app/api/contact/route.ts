// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const data = await resend.emails.send({
      from: "DOMUBOX <onboarding@resend.dev>",
      to: ["domuboximport@gmail.com", "drochart.info@gmail.com"],
      subject: `Consulta de ${name}`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${message}</p>
      `,
    });

    // si Resend responde con éxito, enviamos 200
    return NextResponse.json({ success: true, message: "Correo enviado", data }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    // si hay error, devolvemos 500
    return NextResponse.json({ success: false, message: "Error al enviar correo", error: error.message || error }, { status: 500 });
  }
}
