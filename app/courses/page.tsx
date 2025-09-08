export const metadata = { title: "Courses" };
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";

const courses = [
  {
    title: "Introduction to Computer Science",
    level: "High School / College Prep",
    description:
      "Foundations of programming, computational thinking, and digital literacy.",
    topics: [
      "Programming Fundamentals",
      "Problem-Solving Strategies",
      "Digital Citizenship",
      "Basic Algorithms",
    ],
    outcomes: [
      "Write basic programs in Python",
      "Apply computational thinking to real problems",
      "Understand ethical technology use",
    ],
    duration: "Full Year",
    gradeLevel: "9-12",
  },
  {
    title: "Data Structures & Algorithms",
    level: "Advanced",
    description:
      "Advanced problem-solving with complexity analysis and classic data structures.",
    topics: [
      "Arrays, Lists, Stacks, Queues",
      "Trees and Graphs",
      "Sorting and Searching",
      "Big O Notation",
    ],
    outcomes: [
      "Design efficient algorithms",
      "Analyze time and space complexity",
      "Implement complex data structures",
    ],
    duration: "Full Year",
    gradeLevel: "11-12",
  },
  {
    title: "Mathematics: Algebra & Calculus",
    level: "High School",
    description:
      "Conceptual understanding with applications, modeling, and real-world connections.",
    topics: [
      "Functions and Relations",
      "Limits and Continuity",
      "Derivatives and Applications",
      "Integration",
    ],
    outcomes: [
      "Model real-world phenomena mathematically",
      "Apply calculus to optimization problems",
      "Develop mathematical reasoning skills",
    ],
    duration: "Full Year",
    gradeLevel: "11-12",
  },
  {
    title: "Web Development Fundamentals",
    level: "Intermediate",
    description:
      "Building modern web applications with HTML, CSS, and JavaScript.",
    topics: [
      "HTML5 Semantic Markup",
      "CSS3 and Responsive Design",
      "JavaScript ES6+",
      "DOM Manipulation",
    ],
    outcomes: [
      "Create responsive web pages",
      "Build interactive user interfaces",
      "Understand web standards and accessibility",
    ],
    duration: "Semester",
    gradeLevel: "10-12",
  },
  {
    title: "Database Design & Management",
    level: "Intermediate",
    description: "Designing, implementing, and managing relational databases.",
    topics: [
      "Relational Database Theory",
      "SQL Queries and Optimization",
      "Database Design Principles",
      "Data Integrity",
    ],
    outcomes: [
      "Design normalized database schemas",
      "Write complex SQL queries",
      "Understand data security principles",
    ],
    duration: "Semester",
    gradeLevel: "11-12",
  },
  {
    title: "Mathematics: Statistics & Probability",
    level: "High School",
    description:
      "Statistical thinking and data analysis with real-world applications.",
    topics: [
      "Descriptive Statistics",
      "Probability Distributions",
      "Hypothesis Testing",
      "Data Visualization",
    ],
    outcomes: [
      "Analyze and interpret data",
      "Make informed decisions using statistics",
      "Communicate findings effectively",
    ],
    duration: "Full Year",
    gradeLevel: "10-12",
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Courses Taught"
        subtitle="Comprehensive curriculum designed to develop both technical skills and Christian character."
      />

      <Section title="Teaching Approach">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-8">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Each course is designed with a Reformed Christian worldview,
            emphasizing that all knowledge points to God's wisdom and order.
            Students learn not only technical skills but also develop character
            virtues like integrity, perseverance, and service through their
            academic work.
          </p>
        </div>
      </Section>

      <Section title="Course Catalog">
        <div className="grid gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {course.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {course.level}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Grades {course.gradeLevel}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                {course.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
                    Key Topics
                  </h3>
                  <ul className="space-y-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-center text-slate-600 dark:text-slate-300"
                      >
                        <svg
                          className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
                    Learning Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, outcomeIndex) => (
                      <li
                        key={outcomeIndex}
                        className="flex items-start text-slate-600 dark:text-slate-300"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Assessment & Character Development">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Holistic Assessment Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Project-Based Learning</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Students complete real-world projects that demonstrate both
                technical competency and character development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
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
              <h4 className="font-semibold mb-2">Collaborative Assessment</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Peer evaluation and team projects foster community, mutual
                support, and servant leadership.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Reflective Portfolios</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Students maintain portfolios documenting growth in both skills
                and character, reflecting on their learning journey.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Course Philosophy">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Every course is designed to help students see how their studies
            connect to God's purposes in the world. Whether learning to code,
            solve mathematical problems, or analyze data, students develop not
            just technical skills but also wisdom, discernment, and a heart for
            service.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            <strong>My goal:</strong> To equip students to use their God-given
            talents and acquired skills to serve others and glorify God in
            whatever vocation they pursue.
          </p>
        </div>
      </Section>
    </div>
  );
}
