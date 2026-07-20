"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

type FormState = {
  name: string;
  email: string;
  attendance: string;
};

const initial: FormState = {
  name: "",
  email: "",
  attendance: "yes",
};

export function RSVP() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Não foi possível enviar agora. Tente novamente em alguns instantes.",
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setErrorMessage(
          data?.error ??
            "Não foi possível enviar agora. Tente novamente em alguns instantes.",
        );
        throw new Error(data?.error ?? "Não foi possível enviar");
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="rsvp" className="section bg-cream-deep">
      <div className="section-inner--narrow mx-auto">
        <Reveal className="section-header text-center !mb-0">
          <p className="eyebrow">Presença</p>
          <h2 className="section-title">Confirme sua presença</h2>
          <p className="section-lede mx-auto">
            Pedimos confirmação até 19 de setembro. Isso nos ajuda a preparar tudo
            com cuidado.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="section-body relative min-h-[22rem]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[22rem] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-champagne"
                  >
                    <span className="text-2xl text-champagne" aria-hidden>
                      ✓
                    </span>
                  </motion.div>
                  <h3 className="font-serif text-3xl md:text-4xl">
                    Recebemos sua resposta
                  </h3>
                  <p className="mt-4 max-w-sm text-ink-soft">
                    Obrigado. Mal podemos esperar para celebrar com você.
                  </p>
                  <button
                    type="button"
                    className="mt-10 eyebrow text-ink-soft underline-offset-4 hover:underline"
                    onClick={() => {
                      setForm(initial);
                      setStatus("idle");
                    }}
                  >
                    Enviar outra resposta
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Field label="Nome">
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="field"
                    />
                  </Field>

                  <Field label="E-mail">
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="field"
                    />
                  </Field>

                  <Field label="Presença">
                    <select
                      name="attendance"
                      value={form.attendance}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, attendance: e.target.value }))
                      }
                      className="field"
                    >
                      <option value="yes">Estarei presente</option>
                      <option value="no">Não poderei ir</option>
                    </select>
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative mt-6 w-full overflow-hidden border border-ink bg-ink px-8 py-4 text-sm uppercase tracking-[0.22em] text-cream transition-colors hover:bg-transparent hover:text-ink disabled:opacity-60"
                  >
                    {status === "submitting" ? "Enviando…" : "Confirmar"}
                  </button>
                  {status === "error" && (
                    <p role="alert" className="text-center text-sm text-red-800">
                      {errorMessage}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <div className="mt-5">{children}</div>
    </label>
  );
}
