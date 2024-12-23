"use client";

import React, { useRef, useState } from "react";
import { sendEmail } from "@/lib/email";
import { Bebas_Neue } from "next/font/google";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function ContactForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRef.current.value.match(emailRegex)) {
      setFormStatus("error");
      setMessage("Error: Invalid Email");
      return;
    }

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("message", messageRef.current.value);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setFormStatus("success");
        setMessage("Thank you for submitting!");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setFormStatus("error");
      setMessage("Form submission failed. Please try again.");
    }
  };

  if (formStatus === "success" || formStatus === "error") {
    return (
      <div className="relative flex flex-col md:flex-row items-center justify-between w-screen max-w-[90rem] mt-32 mx-auto bg-neutral-900 p-10 rounded-2xl">
        <h1
          className={`${bn.className} text-8xl md:text-[11rem] tracking-tight font-semibold uppercase `}
        >
          Contact Us!
        </h1>
        <p
          className={`text-lg space-y-4 w-full max-w-xl font-medium ${formStatus === "success" ? "text-green-600" : "text-red-600"}`}
        >
          {message}
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-screen max-w-[90rem] mt-32 mx-auto bg-neutral-900 p-10 rounded-2xl">
      <h1
        className={`${bn.className} text-8xl md:text-[11rem] tracking-tight font-semibold uppercase `}
      >
        Contact Us!
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            ref={nameRef}
            required
            className="mt-1 block w-full px-3 py-2 bg-neutral-950/50 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            required
            className="mt-1 block w-full px-3 py-2 bg-neutral-950/50 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400"
          >
            Message
          </label>
          <textarea
            id="message"
            ref={messageRef}
            required
            rows="4"
            className="mt-1 block w-full px-3 py-2 bg-neutral-950/50 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            formStatus === "submitting" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {formStatus === "submitting" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}
