"use client";

import { useState, useEffect } from "react";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";

const testimonials = [
  {
    quote:
      "Mr. Emmanuel transformed how I see mathematics. He showed us that math isn't just numbers and formulas—it's about discovering God's order in creation. His patient explanations and real-world examples made calculus click for me.",
    name: "Sarah M.",
    role: "Former Student, Class of 2023",
    category: "Student",
  },
  {
    quote:
      "Our daughter struggled with computer science until she had Mr. Emmanuel. He didn't just teach coding—he taught her to think systematically and use technology to serve others. She now wants to pursue software engineering to help solve social problems.",
    name: "David & Linda Chen",
    role: "Parents",
    category: "Parent",
  },
  {
    quote:
      "Obike is an exceptional educator who seamlessly integrates his Christian faith with rigorous academic instruction. His innovative curriculum design and commitment to character formation have raised the bar for our entire department.",
    name: "Dr. Margaret Thompson",
    role: "Department Chair, Mathematics",
    category: "Colleague",
  },
  {
    quote:
      "The algorithm visualization tools Mr. Emmanuel created completely changed how I understand data structures. His interactive games made learning fun, and I actually looked forward to our CS classes. He taught us that good code is like good character—clear, honest, and purposeful.",
    name: "Marcus Johnson",
    role: "Former Student, Class of 2024",
    category: "Student",
  },
  {
    quote:
      "As a fellow teacher, I've learned so much from Obike's approach to integrating worldview with technical subjects. His workshops on Christian pedagogy have transformed my own teaching practice. He's a true mentor and inspiration.",
    name: "Jennifer Walsh",
    role: "Computer Science Teacher",
    category: "Colleague",
  },
  {
    quote:
      "Mr. Emmanuel's statistics class opened my eyes to how data can be used for good. We analyzed real community problems and learned to present findings ethically. He taught us that with great analytical power comes great responsibility.",
    name: "Priya Patel",
    role: "Former Student, Class of 2023",
    category: "Student",
  },
  {
    quote:
      "Our son was initially intimidated by advanced mathematics, but Mr. Emmanuel's encouraging approach and emphasis on growth mindset helped him excel. He now sees challenges as opportunities to grow, both academically and personally.",
    name: "Robert & Maria Rodriguez",
    role: "Parents",
    category: "Parent",
  },
  {
    quote:
      "Obike's commitment to accessibility in technology education is remarkable. He ensures every student, regardless of their background or abilities, can succeed. His inclusive approach reflects his deep Christian values of dignity and service.",
    name: "Dr. James Kim",
    role: "Special Education Coordinator",
    category: "Colleague",
  },
];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const categories = ["All", "Student", "Parent", "Colleague"];

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === selectedCategory);

  // Auto-rotate featured testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  return (
    <div className="space-y-12">
      <PageHero
        title="Testimonials"
        subtitle="Hear from students, parents, and colleagues about the impact of Christian education."
      />

      {/* Featured Testimonial Carousel */}
      <Section title="Featured Testimonial">
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/30 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative">
            <blockquote className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 leading-relaxed mb-6 font-medium">
              "{filteredTestimonials[currentTestimonial]?.quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                  {filteredTestimonials[currentTestimonial]?.name}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {filteredTestimonials[currentTestimonial]?.role}
                </p>
              </div>
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-academic-sage scale-125"
                        : "bg-academic-sage/50 hover:bg-academic-sage/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="All Testimonials">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentTestimonial(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-academic-sage text-white shadow-lg transform scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0 ${
                        testimonial.category === "Student"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : testimonial.category === "Parent"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      }`}
                    >
                      {testimonial.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Impact by Category">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">
              Student Success
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              Students consistently report improved understanding, increased
              confidence, and a deeper appreciation for how their studies
              connect to God's purposes in the world.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-200">
              Parent Satisfaction
            </h3>
            <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
              Parents appreciate the holistic approach that develops both
              academic skills and character virtues, preparing their children
              for meaningful vocations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200">
              Professional Recognition
            </h3>
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              Colleagues value the innovative teaching methods, collaborative
              spirit, and commitment to integrating Christian worldview with
              academic excellence.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Continuing Impact">
        <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Building Future Leaders</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            These testimonials reflect more than just academic success—they
            represent lives transformed through education that integrates faith,
            learning, and service. Each student, parent, and colleague who
            shares their experience becomes part of a larger story of how
            Christian education can shape the next generation of leaders,
            innovators, and servants.
          </p>
        </div>
      </Section>
    </div>
  );
}
