"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import projectsData from "../../content/projects.json";

const categories = [
  "All",
  "Curriculum Development",
  "Educational Technology",
  "Workshop Development",
  "Web Application",
  "Educational Games",
  "Service Learning",
  "Professional Development",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);
  return (
    <div className="space-y-12">
      <PageHero
        title="Projects & Experience"
        subtitle="Innovative educational initiatives that combine technical excellence with Christian character formation."
      />

      <Section title="Project Philosophy">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-8">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Each project reflects my commitment to integrating Reformed
            Christian principles with cutting-edge educational technology. I
            believe that technical skills should be developed alongside
            character virtues, preparing students to serve God and others
            through their work in technology and mathematics.
          </p>
        </div>
      </Section>

      <Section title="Featured Projects">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-academic-gold text-white shadow-lg transform scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-academic-teal dark:group-hover:text-academic-teal transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
                    Project Details
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.details}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
                    Impact & Results
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Project Categories">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Curriculum Development</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Comprehensive educational frameworks
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Educational Technology</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Interactive learning tools and platforms
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Service Learning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Projects that serve the community
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-orange-600 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Professional Development</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Training and mentorship programs
            </p>
          </div>
        </div>
      </Section>

      <Section title="Project Impact">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Measurable Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                60%
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Average improvement in student engagement
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                25%
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Increase in course pass rates
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                15+
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Teachers trained in new methodologies
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
