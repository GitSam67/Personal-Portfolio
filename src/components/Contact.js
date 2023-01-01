import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

    const sendEmail = (e) => {
      e.preventDefault();

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
  
      emailjs.sendForm('service_k2si4zg', 'template_2q6exjx', e.target, 'PsflA5qIdmDHTJA67')
      .then(() => alert("Form submitted successfully..!!"))
      .catch((error) => alert("Form submission Unsuccessful..!! Kindly try again.."));  
    };

  return (
    <section id="contact" className="relative">
      <div className="container rounded-lg px-5 my-10 mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <i class="fas fa-2x fa-headset inline-block w-10 text-indigo-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact <span className="text-indigo-500"> Me</span>
          </h1>
        </div>
        <div className="bg-white w-5/6 rounded-lg flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/3 items-center justify-center rounded-lg overflow-hidden sm:mr-10 lg:mr-0 pl-20 pb-3 pr-0 flex items-end justify-start relative">
            <img class="w-full h-96 rounded-lg" src="./contact.jpg" alt="contact" />
          </div>
          <form
            netlify
            name="test"
            onSubmit={sendEmail}
            className="lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 ml-20 mt-8 md:mt-0">
            <div className="relative mb-4">
              <i class="fas fa-md fa-user absolute mt-3 ml-3 text-indigo-500" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full bg-gray-800 rounded border items-center pl-10 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="relative mb-4">
              <i class="fas fa-md fa-envelope absolute mt-3 ml-3 text-indigo-500" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full bg-gray-800 rounded border items-center pl-10 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="relative mb-4">
              <i class="fas fa-md fa-phone absolute mt-3 ml-3 text-indigo-500" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                pattern="[0-9]{10}"
                className="w-full bg-gray-800 rounded border items-center pl-10 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="relative mb-4">
              <i class="fas fa-md fa-comment-dots absolute mt-3 ml-3 text-indigo-500" />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full bg-gray-800 rounded border items-center pl-10 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <button
              type="submit"
              className="text-white items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
              <i class="fas fa-sm fa-paper-plane ml-3" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
