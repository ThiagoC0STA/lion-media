import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type: string;
}

const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_HOST, EMAIL_PORT } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT ? parseInt(EMAIL_PORT) : 587,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    return NextResponse.json(
      {
        message:
          "Configuration Error: Missing environment variables (EMAIL_USER/PASS).", // Traduzido
      },
      { status: 500 }
    );
  }

  let data: FormData;
  try {
    data = (await request.json()) as FormData;
  } catch (e) {
    return NextResponse.json(
      { message: "Invalid Request (malformed JSON body)." }, // Traduzido
      { status: 400 }
    );
  }
  const { firstName, lastName, email, phone, type } = data; // 3. Validação básica

  if (!firstName || !email || type === "Please Select") {
    return NextResponse.json(
      { message: "Incomplete required fields." }, // Traduzido
      { status: 400 }
    );
  }

  try {
    const mailOptions = {
      from: EMAIL_USER,
      to: "lionmediacomercial@gmail.com",
      subject: `Nova Solicitação de Demo de ${firstName} ${lastName}`,
      html: `
          <h3>Detalhes da Solicitação de Demo:</h3>
          <p><strong>Nome Completo:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Tipo (Agente/Time/Corretora):</strong> ${type}</p>
                  `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" }, // Traduzido
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { message: "Internal Server Error." }, // Traduzido
      { status: 500 }
    );
  }
}
