"use client";
import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_lzzprmj",
        "template_sdhg6yi",
        formRef.current,
        "FfuI-M8vOxguqgfmK"
      )
      .then(() => {
        alert("Email enviado! 🎉 Obrigado pelo contato...");
        formRef.current?.reset();
      })
      .catch((err) => alert("Erro: " + err.text))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="p-6 bg-white w-full">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Entre em contato com o Insper Code
      </h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="text-sm text-gray-700">Nome</span>
          <input
            type="text"
            name="name" // <- alterado para "name"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B6BB1]/50 focus:border-[#2B6BB1]/50"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Email</span>
          <input
            type="email"
            name="reply_to" // <- este nome é padrão no EmailJS para configurar "responder para"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B6BB1]/50 focus:border-[#2B6BB1]/50"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Assunto</span>
          <input
            type="text"
            name="subject" // <- deve corresponder a {{subject}}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B6BB1]/50 focus:border-[#2B6BB1]/50"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Mensagem</span>
          <textarea
            name="message" // <- deve corresponder a {{message}}
            required
            rows={5}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B6BB1]/50 focus:border-[#2B6BB1]/50"
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 font-medium rounded-sm shadow transition ${
            isLoading
              ? "bg-[#2B6BB1]/50 cursor-not-allowed"
              : "bg-[#2B6BB1]/80 hover:bg-[#2B6BB1]/90 cursor-pointer text-white"
          } flex items-center justify-center gap-2`}
        >
          {isLoading && (
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          )}
          {isLoading ? "Enviando..." : "Enviar Email"}
        </button>
      </form>

    </div>
  );
}
