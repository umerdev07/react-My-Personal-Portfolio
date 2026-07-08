import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "remixicon/fonts/remixicon.css";
import SuccessMessage from "../../componets/Section7Components/SuccessMessage";

const RightContentContactUs = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Name.trim() || !Email.trim() || !Message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Contact email to you
      await emailjs.send(
        "service_333oro5",
        "template_2x2tzb8",
        {
          name: Name,
          email: Email,
          message: Message,
        },
        "RZhQY4U8f6-58IXRQ"
      );

      // Auto reply to visitor
      await emailjs.send(
        "service_333oro5",
        "template_amppju8",
        {
          name: Name,
          email: Email,
          message: Message,
        },
        "RZhQY4U8f6-58IXRQ"
      );

      setName("");
      setEmail("");
      setMessage("");

      setIsSent(true);

      setTimeout(() => {
        setIsSent(false);
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  if (isSent) {
    return <SuccessMessage />;
  }

  return (
    <div className="rounded-3xl bg-[#10182c] border border-cyan-400/20 w-full h-fit p-5 lg:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="flex flex-col md:flex-row gap-5">

          <div className="flex-1">
            <label className="block text-gray-400 text-start text-lg mb-3">
              Name
            </label>

            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-full px-5 py-3 text-lg bg-[#1A2338] border border-gray-600/40 text-white placeholder:text-gray-400/50 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:bg-[#202C46]"
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-400 text-start text-lg mb-3">
              Email
            </label>

            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full rounded-full px-5 py-3 text-lg bg-[#1A2338] border border-gray-600/40 text-white placeholder:text-gray-400/50 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:bg-[#202C46]"
            />
          </div>

        </div>

        <div>
          <label className="block text-gray-400 text-start text-lg mb-3">
            Message
          </label>

          <textarea
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project or opportunity..."
            className="w-full h-40 rounded-3xl bg-[#222A40] border border-gray-600/40 px-6 py-5 text-lg text-white placeholder:text-gray-500 outline-none resize-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
          />
        </div>

        <button
          type="submit"
          className="text-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 cursor-pointer w-full p-5 rounded-3xl hover:scale-[1.02] transition-all duration-300"
        >
          Send Message{" "}
          <i className="ri-arrow-right-line"></i>
        </button>

      </form>
    </div>
  );
};

export default RightContentContactUs;