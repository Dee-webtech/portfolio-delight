import React, { useState } from "react";

export default function Contact() {
  const [sender, setSender] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSender({ name: "", email: "", message: "" });
    setSent(true); // ✅ show success message

    // hide message after 4s
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Contact
          </h2>
          <p className="text-gray-600 mt-2">
            Interested in working together? Send a message.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white p-6 rounded-2xl shadow-soft-lg"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              value={sender.name}
              onChange={(e) => setSender({ ...sender, name: e.target.value })}
              placeholder="Your name"
              className="p-3 border rounded-lg"
            />
            <input
              required
              type="email"
              value={sender.email}
              onChange={(e) => setSender({ ...sender, email: e.target.value })}
              placeholder="Your email"
              className="p-3 border rounded-lg"
            />
            <textarea
              required
              value={sender.message}
              onChange={(e) =>
                setSender({ ...sender, message: e.target.value })
              }
              placeholder="Your message"
              className="p-3 md:col-span-2 border rounded-lg min-h-[120px]"
            />
          </div>

          <div className="mt-4 text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-accent text-white rounded-lg shadow"
            >
              Send
            </button>
            {sent && (
              <p className="mt-3 text-green-600">
                Thanks for contacting! I'll be with you in a bit.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
