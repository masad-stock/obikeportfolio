"use client";

import SkillsVisualization from "../../components/SkillsVisualization";

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
          <div className="bg-white dark:bg-slate-900 rounded-full p-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              OE
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Obike Emmanuel
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
          Computer Science & Mathematics Educator
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Passionate about empowering students with practical skills and
          fostering curiosity through innovative teaching methods and real-world
          applications.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
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
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-slate-600 dark:text-slate-300">
            MSc IT (Ongoing), PGDE, BSc Mathematics & Computer Science
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-slate-600 dark:text-slate-300">
            5+ years teaching Computer Science & Mathematics, curriculum
            development, and coding workshops
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <p className="text-slate-600 dark:text-slate-300">
            JavaScript, Python, Django, Angular, MySQL, Git, Machine Learning,
            Linux Systems
          </p>
        </div>
      </section>

      {/* Skills Visualization */}
      <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <SkillsVisualization />
      </section>

      {/* Teaching Journey */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Teaching Journey
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            The Call to Education
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            My journey into education began with a deep conviction that God had
            called me to serve others through teaching. After completing my
            undergraduate studies in Mathematics and Computer Science, I felt
            drawn to share the beauty and order I saw in these subjects with the
            next generation.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            What started as a desire to teach technical skills has evolved into
            a comprehensive approach that integrates academic excellence with
            character formation, always keeping in mind that all truth is God's
            truth and that our ultimate purpose is to glorify Him through our
            work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Early Years & Development
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              In my early teaching years, I focused on mastering the
              fundamentals of computer science and mathematics education. I
              quickly realized that students learned best when they could see
              the practical applications of abstract concepts.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              This led me to develop project-based learning approaches that
              connected classroom learning to real-world problems, always
              emphasizing how technical skills could be used to serve others and
              solve community challenges.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
              Integration of Faith & Learning
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              As my understanding of Reformed theology deepened, I began to see
              how my Christian faith could inform and enhance my teaching
              practice. I discovered that mathematics reveals God's order,
              computer science demonstrates His logic, and problem-solving
              mirrors His creative wisdom.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              This integration has transformed not just how I teach, but how
              students learn—they now see their studies as part of a larger
              story of God's work in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Personal Philosophy
        </h2>
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6 text-center">
            "Education is not merely the transmission of information, but the
            formation of whole persons who can think critically, act ethically,
            and serve faithfully in whatever vocation God calls them to."
          </blockquote>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center">
            This conviction drives everything I do as an educator. Whether
            teaching algorithms, calculus, or web development, I strive to help
            students see how their learning connects to God's purposes and
            prepares them to be faithful stewards of the gifts and opportunities
            He provides.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Based in Kenya
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Specializes in CS & Math education
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Focus on practical, project-based learning
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Reformed Christian worldview
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Experience with modern web technologies
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Committed to student success and innovation
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Passionate about character formation
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-slate-700 dark:text-slate-300">
                Advocate for accessible technology education
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="text-center bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          As I continue in this calling, I'm excited about the opportunities to
          develop new educational technologies, mentor fellow educators, and
          prepare students for a rapidly changing world. My prayer is that
          through faithful teaching and learning, we can raise up a generation
          of Christians who are equipped to serve God and others through
          excellence in technology, mathematics, and all areas of life.
        </p>
      </section>
    </div>
  );
}
