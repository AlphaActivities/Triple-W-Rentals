import React, { useState } from "react";

function encode(data: Record<string, FormDataEntryValue>) {
  return new URLSearchParams(data as Record<string, string>).toString();
}

export default function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    fd.append("form-name", "contact");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(fd.entries())),
      });
      form.reset();
      setState("sent");
      setTimeout(() => setState("idle"), 6000);
    } catch {
      setState("error");
    }
  };

  return (
    <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-4"
    >
      <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />

      <input type="hidden" name="form-name" value="contact" />

      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white"
        />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="px-5 py-2 rounded-md bg-[#00b0ff] hover:bg-white hover:text-black transition font-semibold"
      >
        {state === "sending" ? "Sending…" : "Send Inquiry"}
      </button>

      {state === "sent" && (
        <p className="text-green-400/90 text-sm">Message sent. We'll be in touch.</p>
      )}
      {state === "error" && (
        <p className="text-red-400/90 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
