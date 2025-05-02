"use client";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_k5nms6v",
        "template_4eal5lt",
        formRef.current,
        "z_A3g_9lcY3niEzZG"
      )
      .then(
        () => alert("Email sent! 🎉"),
        (err) => alert("Error: " + err.text)
      );

    formRef.current.reset();
  };

  return (
    <div className="p-6 bg-white w-full">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Nos envie uma mensagem
      </h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <label className="block">
          <span className="text-sm text-gray-700">Nome</span>
          <input
            type="text"
            name="user_name"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B6BB1]/50 focus:border-[#2B6BB1]/50"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Email</span>
          <input
            type="email"
            name="user_email"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B6BB1]/50 focus:border-[#2B6BB1]/50"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Mensagem</span>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B6BB1]/50 focus:border-[#2B6BB1]/50"
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-[#2B6BB1]/80 text-white font-medium rounded-sm shadow hover:bg-[#2B6BB1]/90 transition cursor-pointer"
        >
          Enviar Email
        </button>
      </form>
    </div>
  );
}
