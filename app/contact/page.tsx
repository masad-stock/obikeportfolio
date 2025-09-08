"use client";
import { useState } from "react";

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const endpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    "https://formspree.io/f/your-id";
  const heading = "Contact";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const data = new FormData(form);

    // simple honeypot
    if ((data.get("company") as string)?.length) {
      setIsSubmitting(false);
      return;
    }

    // basic validation
    if (!(data.get("name") && data.get("email") && data.get("message"))) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-12">
      {/* Enhanced Hero Section */}
      <div className="relative isolate overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-600 via-academic-teal to-academic-cyan px-8 py-16 text-white shadow-2xl dark:from-blue-800 dark:via-academic-teal-dark dark:to-academic-cyan-dark">
        <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light [background-image:radial-gradient(ellipse_at_top,white_10%,transparent_50%),radial-gradient(ellipse_at_bottom,white_10%,transparent_50%)]" />

        {/* Floating elements */}
        <div
          className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>

        <div className="relative">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {heading}
          </h1>
          <p className="text-xl text-blue-50/90 max-w-3xl leading-relaxed">
            I&apos;d love to hear from you. Whether you&apos;re interested in
            collaboration, have questions about my teaching methods, or want to
            discuss educational technology, I&apos;m here to help.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Email
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    obikeimmanuel@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Response Time
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Usually within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Location
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Form */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Send a Message
          </h2>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project, question, or how I can help..."
                rows={6}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-academic-gold to-academic-teal text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </>
              )}
            </button>

            {status === "success" && (
              <div className="p-4 bg-academic-sage/20 dark:bg-academic-sage/20 border border-academic-sage/30 dark:border-academic-sage/30 rounded-xl">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-academic-sage dark:text-academic-sage mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-academic-sage dark:text-academic-sage font-medium">
                    Message sent successfully! Thank you for reaching out.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-red-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
