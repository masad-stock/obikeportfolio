import Section from "../../components/Section";
import PageHero from "../../components/PageHero";

export const metadata = { title: "Teaching Philosophy" };

export default function PhilosophyPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Educational Philosophy"
        subtitle="A Reformed Christian perspective on teaching and learning."
      />

      {/* Calvinistic Foundation */}
      <Section title="Theological Foundation">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            My educational philosophy is deeply rooted in a{" "}
            <strong>Reformed Christian worldview</strong>, drawing from the rich
            tradition of Calvinistic thought on education. I believe that all
            truth is God's truth, and that education should reflect the order,
            beauty, and purpose inherent in God's creation.
          </p>

          <div className="bg-gradient-to-r from-academic-teal/20 to-academic-sage/20 dark:from-academic-teal/20 dark:to-academic-sage/20 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-academic-teal dark:text-academic-teal">
              Core Calvinistic Principles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-academic-teal dark:text-academic-teal mb-2">
                  Soli Deo Gloria
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  All learning should ultimately glorify God and reflect His
                  character. Mathematics reveals His order, computer science
                  demonstrates His logic, and problem-solving mirrors His
                  creative wisdom.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-academic-teal dark:text-academic-teal mb-2">
                  Total Depravity & Grace
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  While acknowledging human limitations, I believe in the
                  transformative power of grace in learning. Every student has
                  God-given potential that can be developed through patient,
                  loving instruction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Educational Principles */}
      <Section title="Educational Principles">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">
                    Inquiry-Based Learning
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Following the Socratic method and Reformed emphasis on
                  discovery, I guide students to uncover truth through
                  questioning, exploration, and critical thinking. This mirrors
                  how God reveals Himself through His creation.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400"
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
                  <h3 className="text-lg font-semibold">
                    Problem-Solving Focus
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Computational thinking and algorithmic problem-solving reflect
                  God's orderly nature. Students learn to approach complex
                  problems systematically, developing both technical skills and
                  godly wisdom.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-400"
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
                  <h3 className="text-lg font-semibold">Individual Dignity</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Each student is created in God's image with unique gifts and
                  calling. I practice differentiated instruction to honor
                  individual dignity while fostering community and mutual
                  support.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-orange-600 dark:text-orange-400"
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
                  <h3 className="text-lg font-semibold">
                    Technology Integration
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Technology, when used wisely, can enhance learning and serve
                  God's purposes. I integrate tools thoughtfully to deepen
                  understanding while maintaining human connection and moral
                  formation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Character Formation */}
      <Section title="Character Formation & Virtue">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Developing Christian Virtues Through Learning
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Integrity</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Honest work, proper attribution, and ethical use of technology
                in all projects and assignments.
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Perseverance</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Learning to persist through difficult problems, embracing
                challenges as opportunities for growth.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Service</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Using technical skills to serve others, solve real problems, and
                contribute to the common good.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Practical Application */}
      <Section title="In Practice">
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4">
              Algorithm Design Unit
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              In a recent unit on algorithms, students collaborated to design
              step-by-step solutions to real-world problems. This project
              exemplified several key principles:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
              <li>
                <strong>Discovery Learning:</strong> Students explored different
                algorithmic approaches through guided inquiry
              </li>
              <li>
                <strong>Collaborative Wisdom:</strong> Teams worked together,
                reflecting the body of Christ
              </li>
              <li>
                <strong>Real-World Application:</strong> Problems addressed
                actual community needs
              </li>
              <li>
                <strong>Character Development:</strong> Students practiced
                patience, humility, and mutual encouragement
              </li>
              <li>
                <strong>Technical Excellence:</strong> Code was written with
                attention to clarity, efficiency, and maintainability
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
              Assessment Philosophy
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Assessment serves both to measure learning and to guide growth. I
              use a variety of methods including project-based assessments, peer
              evaluations, and reflective portfolios. The goal is not merely to
              assign grades, but to help students understand their progress and
              identify areas for continued development. This reflects the
              Reformed understanding of sanctification—ongoing growth in
              knowledge, wisdom, and character.
            </p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section title="Vision for Education">
        <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Preparing Students for God's Calling
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            My ultimate goal is to equip students not just with technical
            skills, but with the wisdom, character, and discernment needed to
            serve God faithfully in whatever vocation He calls them to. Whether
            they become software engineers, mathematicians, teachers, or pursue
            other paths, I want them to see their work as a form of worship and
            service to God and neighbor.
          </p>
        </div>
      </Section>
    </div>
  );
}
