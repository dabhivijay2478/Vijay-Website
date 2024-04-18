import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Contactus() {
  const navigation = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (fullName.trim() === "") {
      setFullNameError("Please enter your name");
      isValid = false;
    } else {
      setFullNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setEmailError("Please enter your email address");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Please enter your message");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);

    const response = await fetch("/send-email", {
      method: "POST",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        message: message,
      }),
    });

    setFullName("");
    setEmail("");
    setMessage("");
    const Maildata = response.json();
    if (response.status === 400 || !Maildata) {
      window.alert("Invalid");
    } else if (response.status === 422 || !Maildata) {
      window.alert("Please fill in all the information.");
    } else {
      window.alert("Successfully sent email to Vijay Dabhi");
      setIsLoading(false);
      navigation("");
    }
  };

  return (
    <section className="body-font relative text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Get in Touch
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-center items-center mb-8">
          <MdEmail className="text-base text-sky-500 mr-2 w-6  h-6" />
          <span className="text-base text-purple-500">
            vijaydabhi0428@gmail.com
          </span>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  type="submit"
                  className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
