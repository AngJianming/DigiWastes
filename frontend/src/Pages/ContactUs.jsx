import React, { useState } from "react";
import { Wrapper } from "../Components";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (email === "" || name === "" || message === "") {
      alert("Please fill all the fields");
      return;
    }
    // Add your submit logic here
    try {
      // API call or form submission logic
      alert("Message sent successfully!");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <Wrapper>
      <div className="min-h-screen flex justify-center items-center px-4 py-12">
        <div className="w-full max-w-2xl bg-[#343434] shadow-3xl rounded-xl p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-2">
              Get in Touch
            </h1>
            <p className="text-gray-400 font-montserrat">
              We'd love to hear from you. Send us a message.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-montserrat font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 bg-[#222222] font-montserrat focus:border-[#01796f] focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-montserrat font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 bg-[#222222] font-montserrat focus:border-[#01796f] focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block font-montserrat font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 bg-[#222222] font-montserrat focus:border-[#01796f] focus:outline-none transition-colors resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#01796f] hover:bg-[#015951] text-white font-montserrat font-semibold py-3 rounded-lg transition-colors duration-300 hover:scale-[1.02] transform"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;