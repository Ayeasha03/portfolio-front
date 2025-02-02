import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Sending message...");
    try {
      const response = await axios.post("https://backend-o2rt.onrender.com/api/messages", formData);

      toast.update(id, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 5000
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.update(id, {
        render: "Failed to send message. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000
      });
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-teal-500 text-center">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-4xl mx-auto grid grid-cols-1 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-white rounded shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
