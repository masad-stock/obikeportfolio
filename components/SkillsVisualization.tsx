"use client";

import { useState, useEffect } from "react";

const skills = [
  {
    name: "JavaScript/TypeScript",
    level: 95,
    color: "from-academic-cyan to-academic-teal",
  },
  { name: "Python", level: 90, color: "from-academic-cyan to-blue-500" },
  {
    name: "React/Next.js",
    level: 92,
    color: "from-academic-cyan to-academic-teal",
  },
  {
    name: "Mathematics",
    level: 98,
    color: "from-academic-teal to-academic-sage",
  },
  {
    name: "Curriculum Design",
    level: 88,
    color: "from-academic-sage to-academic-teal",
  },
  {
    name: "Educational Technology",
    level: 85,
    color: "from-academic-teal to-academic-cyan",
  },
  { name: "Data Analysis", level: 82, color: "from-academic-cyan to-blue-500" },
  {
    name: "Web Development",
    level: 90,
    color: "from-academic-cyan to-academic-teal",
  },
];

export default function SkillsVisualization() {
  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map((skill) => ({ ...skill, level: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Technical & Educational Expertise
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Skills developed through years of teaching and continuous learning
        </p>
      </div>

      <div className="grid gap-6">
        {animatedSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {skill.level}%
              </span>
            </div>
            <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                style={{ width: `${skill.level}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-academic-teal/20 to-academic-sage/20 dark:from-academic-teal/20 dark:to-academic-sage/20 rounded-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-academic-teal/20 dark:bg-academic-teal/20 rounded-xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-academic-teal dark:text-academic-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">
              Continuous Learning
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Committed to staying current with educational technology and best
              practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
