"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    color: string;
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([]);

  useEffect(() => {
    // Generate particles client-side
    const colors = [
      "bg-white/50",
      "bg-academic-cyan/60",
      "bg-academic-teal/60",
      "bg-academic-gold/60",
      "bg-purple-300/60",
    ];
    const generatedParticles = [...Array(25)].map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setParticles(generatedParticles);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:obikeimmanuel@gmail.com",
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
    },
    {
      name: "RSS",
      href: "/rss.xml",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zM2.057 24c1.137 0 2.057-.921 2.057-2.057 0-1.137-.92-2.057-2.057-2.057A2.056 2.056 0 0 0 0 21.943C0 23.079.921 24 2.057 24zM15.563 24c0-6.627-5.373-12-12-12s-12 5.373-12 12h2.003c0-5.523 4.48-10 10-10s10 4.477 10 10H15.563z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Courses", href: "/courses" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const teachingAreas = [
    "Computer Science",
    "Mathematics",
    "Algorithms",
    "Data Structures",
    "Web Development",
    "Problem Solving",
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-academic-cyan/35 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-academic-teal/35 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-academic-gold/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1.5 h-1.5 ${particle.color} rounded-full animate-float`}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        {/* Main footer content */}
        <div
          className={`relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-academic-gold to-academic-teal rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                OE
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-academic-cyan bg-clip-text text-transparent">
                  Obike Emmanuel
                </h3>
                <p className="text-academic-cyan/80 text-sm font-medium">
                  Computer Science & Mathematics Educator
                </p>
              </div>
            </div>

            <p className="text-slate-200 leading-relaxed max-w-md">
              Empowering the next generation through innovative teaching,
              problem-solving, and character development. Committed to
              integrating technology with Christian values to prepare students
              for meaningful vocations.
            </p>

            {/* Live clock */}
            <div className="flex items-center space-x-3 p-4 bg-slate-600/70 rounded-xl border border-slate-500/70 backdrop-blur-sm">
              <div className="w-10 h-10 bg-academic-teal/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-academic-teal"
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
                <p className="text-sm text-slate-300">Current Time</p>
                <p className="text-academic-cyan font-mono text-lg">
                  {currentTime ? currentTime.toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }) : "Loading..."}
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center space-x-2 px-4 py-2 bg-slate-600/70 hover:bg-academic-teal/40 rounded-lg border border-slate-500/70 hover:border-academic-teal/70 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-academic-cyan group-hover:text-academic-teal transition-colors duration-300">
                    {social.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center">
              <span className="w-2 h-2 bg-academic-gold rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-200 hover:text-academic-cyan transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <svg
                      className="w-4 h-4 mr-3 text-academic-teal/60 group-hover:text-academic-cyan transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Areas */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center">
              <span className="w-2 h-2 bg-academic-sage rounded-full mr-3"></span>
              Teaching Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {teachingAreas.map((area, index) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-slate-600/70 hover:bg-academic-sage/40 text-slate-200 hover:text-academic-sage rounded-full text-sm border border-slate-500/70 hover:border-academic-sage/70 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-600/50 rounded-lg border border-slate-500/50">
                <div className="w-8 h-8 bg-academic-gold/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-academic-gold"
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
                  <p className="text-xs text-slate-300">Location</p>
                  <p className="text-sm text-slate-200">Kenya</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-600/50 rounded-lg border border-slate-500/50">
                <div className="w-8 h-8 bg-academic-cyan/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-academic-cyan"
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
                  <p className="text-xs text-slate-300">Email</p>
                  <p className="text-sm text-slate-200">
                    obikeimmanuel@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className={`relative z-10 mt-16 pt-8 border-t border-slate-500/70 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-sm text-slate-300">
              <p>
                © {new Date().getFullYear()} Obike Emmanuel. All rights
                reserved.
              </p>
              <span className="hidden md:inline">•</span>
              <p className="hidden md:inline">
                Built with Next.js & Tailwind CSS
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-slate-300 hover:text-academic-cyan transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-slate-300 hover:text-academic-cyan transition-colors duration-300 text-sm"
              >
                Sitemap
              </Link>
              <div className="flex items-center space-x-2 text-slate-300 text-sm">
                <div className="w-2 h-2 bg-academic-sage rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
