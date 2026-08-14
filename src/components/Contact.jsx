import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      name="Contact"
      className="min-h-screen bg-white flex items-center justify-center px-5 py-20"
    >
      <div className="w-full max-w-5xl bg-white-900 rounded-3xl border border-white-500/30 p-8 shadow-lg">

        <h2 className="text-4xl font-bold text-center text-green">
          Contact <span className="text-green-500">Me</span>
        </h2>

        <p className="text-black-400 text-center mt-3 mb-10">
          Feel free to contact me anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Gmail */}
          <a
            href="sul27430@gmail.com"
            className="bg-lightgrey p-6 rounded-xl border border-zinc-700 hover:border-green-500 duration-300"
          >
            <FaEnvelope className="text-3xl text-green-500 mb-3" />
            <h3 className="text-black-500 font-semibold text-xl">Gmail</h3>
            <p className="text-black-300 mt-2">sul27430@gmail.com</p>
          </a>

          {/* Mobile */}
          <a
            href="tel:+917388562058"
            className="bg-white p-6 rounded-xl border border-zinc-700 hover:border-green-500 duration-300"
          >
            <FaPhoneAlt className="text-3xl text-green-500 mb-3" />
            <h3 className="text-black-500 font-semibold text-xl">Mobile</h3>
            <p className="text-black-300 mt-2">+91 7388562058</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/7388562058"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-6 rounded-xl border border-zinc-700 hover:border-green-500 duration-300"
          >
            <FaWhatsapp className="text-3xl text-green-500 mb-3" />
            <h3 className="text-black-500 font-semibold text-xl">WhatsApp</h3>
            <p className="text-black-300 mt-2">7388562058</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mohd-sultan-8675a1418"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-6 rounded-xl border border-zinc-700 hover:border-green-500 duration-300"
          >
            <FaLinkedin className="text-3xl text-green-500 mb-3" />
            <h3 className="text-black-500 font-semibold text-xl">LinkedIn</h3>
            <p className="text-black-300 mt-2">Visit my Linkedin</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mohdsultan-dev"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-6 rounded-xl border border-zinc-700 hover:border-green-500 duration-300 md:col-span-2"
          >
            <FaGithub className="text-3xl text-green-500 mb-3" />
            <h3 className="text-black-500 font-semibold text-xl">GitHub</h3>
            <p className="text-black-300 mt-2">Visit my github profile</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;