const RECIPIENT = "taty_ios@hotmail.com";

type RsvpPayload = {
  name?: unknown;
  email?: unknown;
  attendance?: unknown;
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
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

  const attendanceLabel =
    attendance === "yes" ? "Estará presente" : "Não poderá comparecer";

  const origin =
    request.headers.get("origin") ??
    request.headers.get("referer") ??
    "http://localhost:3000";

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: origin,
      },
      body: JSON.stringify({
        name,
        email,
        presença: attendanceLabel,
        _subject: `RSVP — ${name}`,
        _replyto: email,
        _template: "table",
      }),
    },
  );

  let result: {
    success?: string | boolean;
    error?: string;
    message?: string;
  } = {};

  try {
    result = (await response.json()) as typeof result;
  } catch {
    // FormSubmit may return empty body on some errors
  }

  const succeeded =
    response.ok &&
    (result.success === true || result.success === "true") &&
    !result.error;

  if (!succeeded) {
    const detail = result.error ?? result.message ?? `status ${response.status}`;
    console.error("Failed to send RSVP email:", detail);

    const needsActivation =
      typeof detail === "string" &&
      detail.toLowerCase().includes("activation");

    return Response.json(
      {
        error: needsActivation
          ? "Ative o formulário: abra o e-mail que o FormSubmit enviou para taty_ios@hotmail.com e clique em Activate Form. Depois tente de novo."
          : "Falha ao enviar e-mail. Tente novamente em alguns instantes.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
