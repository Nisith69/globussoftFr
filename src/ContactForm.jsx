import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 bg-amber-800">
          Contact Us
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4 "
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          rows="4"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;