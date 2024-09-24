"use client"

import {useState, FormEvent } from "react";
import { supabase } from "../../supabase/supabaseClient"

export const Form = () => {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null >(null);

  
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!supabase) {
      setFormError("Service is currently unavailable. Please try again later.");
      return;
    }
    
    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //to do!!!!

    setNameError(!name);
    setEmailError(!email || !isValidEmail(email));
    setMessageError(!message);

    if (!name || !email || !message || !isValidEmail(email)) {
      setFormError("Please fill in all fields correctly.");
      setSuccessMessage(null);
      console.log("Form validation failed");
      return;
    }

    console.log("Form is valid, sending data...");

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, message, email }]);

    if (error) {
      setFormError(
        error.message || "There was an issue submitting the form. Please try again."
      );
      setSuccessMessage(null);
    }
    
    setFormError(null);
    setSuccessMessage("Thank you for your message! We will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
    
  };

  return (
    <div className="max-w-[800px] mx-auto">
    <div className="mt-6 bg-[#161616] rounded-xl">
      <div className="p-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  className={`bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border ${
                    nameError ? "border-2 border-red-500" : "border-gray-700"
                  } rounded-md focus:outline-none focus:border-pink-600`}
                />
              </div>
            </div>

            <div>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border ${
                    emailError ? "border-2 border-red-500" : "border-gray-700"
                  } rounded-md focus:outline-none focus:border-pink-600`}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  className={`bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border ${
                    messageError ? "border-2 border-red-500" : "border-gray-700"
                  } rounded-md focus:outline-none focus:border-pink-600`}
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                disabled={!!successMessage}
              >
                Send
              </button>
            </div>
          </div>
          {formError && <p className="text-red-500 mt-4">{formError}</p>}
          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
    </div>
  )
}
