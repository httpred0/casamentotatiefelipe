import { Resend } from "resend";

const RECIPIENT = "taty_ios@hotmail.com";

type RsvpPayload = {
  name?: unknown;
  email?: unknown;
  attendance?: unknown;
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.RSVP_FROM_EMAIL) {
    console.error("RSVP email environment variables are not configured.");
    return Response.json({ error: "Email não configurado" }, { status: 503 });
  }

  let payload: RsvpPayload;

  try {
    payload = (await request.json()) as RsvpPayload;
  } catch {
    return Response.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const name = text(payload.name, 120);
  const email = text(payload.email, 254);
  const attendance = text(payload.attendance, 10);

  if (!name || !email || !email.includes("@")) {
    return Response.json(
      { error: "Nome e e-mail são obrigatórios" },
      { status: 400 },
    );
  }

  if (attendance !== "yes" && attendance !== "no") {
    return Response.json({ error: "Presença inválida" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const attendanceLabel =
    attendance === "yes" ? "Estará presente" : "Não poderá comparecer";

  const { error } = await resend.emails.send({
    from: process.env.RSVP_FROM_EMAIL,
    to: RECIPIENT,
    replyTo: email,
    subject: `RSVP — ${name}`,
    text: [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Presença: ${attendanceLabel}`,
    ].join("\n"),
    html: `
      <h1>Nova confirmação de presença</h1>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Presença:</strong> ${attendanceLabel}</p>
    `,
  });

  if (error) {
    console.error("Failed to send RSVP email:", error);
    return Response.json({ error: "Falha ao enviar e-mail" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
