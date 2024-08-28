"use client";

import { submitContactForm, ContactFormState } from "@/app/lib/actions";
import { useActionState } from "react";

export default function ContactForm() {
  const initialState: ContactFormState = { errors: {}, statusMessage: null };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="max-w-md mx-auto">
      {/* <label htmlFor="email">your email</label>
      <input type="email" id="email" name="email" /> */}

      <label htmlFor="subject" className="sr-only">
        subject
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        className="w-full border-b border-gray-500 bg-transparent placeholder-gray-400"
      />

      {/* PRACTICE div to see errors */}
      <div>
        {state.errors?.subject &&
          state.errors?.subject.map((error: string) => (
            <p key={error}>{error}</p>
          ))}
      </div>

      <label htmlFor="message" className="sr-only">
        message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        className="w-full border-b border-gray-500 bg-transparent placeholder-gray-400"
      />

      <div className="text-center mt-8">
        <button
          type="submit"
          className="px-8 py-3 font-semibold rounded-lg text-white"
        >
          send
        </button>
        <p key={state.statusMessage}>{state.statusMessage}</p>
      </div>
    </form>
  );
}
