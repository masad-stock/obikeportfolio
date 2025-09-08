import Image from "next/image";
import Section from "../components/Section";
import Link from "next/link";
import Marquee from "../components/Marquee";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative isolate overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-600 via-academic-teal to-academic-cyan px-8 py-16 text-white shadow-2xl dark:from-blue-800 dark:via-academic-teal-dark dark:to-academic-cyan-dark">
        {/* Animated background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light [background-image:url('/images/hero-pattern.svg')] bg-cover bg-center animate-pulse" />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-300/20 rounded-full blur-md animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>

        <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-academic-gold to-academic-teal rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-white/20 sm:h-40 sm:w-40 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/headshot.jpg"
                alt="Obike Emmanuel"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-fade-in">
                Obike Emmanuel
              </h1>
              <p className="text-xl text-blue-50/90 font-medium">
                Computer Science & Mathematics Teacher
              </p>
              <p className="text-blue-100/80 max-w-lg">
                Empowering students through innovative teaching,
                problem-solving, and character development
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-academic-gold text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-academic-gold-light hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-academic-gold to-academic-teal rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/philosophy"
                className="group inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
              >
                Teaching Philosophy
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee speed={30}>
        <div className="inline-flex gap-8 py-4">
          <Image
            src="/images/project1.jpeg"
            alt="Project 1"
            width={200}
            height={120}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/project2.jpeg"
            alt="Project 2"
            width={200}
            height={120}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/project3.jpeg"
            alt="Project 3"
            width={200}
            height={120}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/project4.jpeg"
            alt="Project 4"
            width={200}
            height={120}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/project5.jpeg"
            alt="Project 5"
            width={200}
            height={120}
            className="rounded-lg object-cover"
          />
        </div>
      </Marquee>

      {/* <Section title="About">
        <p>
          I am a passionate educator with experience teaching Computer Science
          and Mathematics, focused on building strong problem-solving skills and
          fostering curiosity in learners. I integrate technology,
          collaboration, and real-world projects to create engaging learning
          experiences.
        </p>
      </Section>

      <Section title="Highlights">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-academic-teal/20 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-slate-700/60 dark:from-blue-900/20 dark:to-academic-teal/20">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
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
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  5+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-academic-sage/20 to-academic-teal/20 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-slate-700/60 dark:from-academic-sage/20 dark:to-academic-teal/20">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-academic-sage/20 dark:bg-academic-sage/20">
                <svg
                  className="h-6 w-6 text-academic-sage dark:text-academic-sage"
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
              <div>
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">
                  4
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Core Subjects
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-academic-gold/20 to-academic-cyan/20 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 dark:border-slate-700/60 dark:from-academic-gold/20 dark:to-academic-cyan/20">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-academic-gold/20 dark:bg-academic-gold/20">
                <svg
                  className="h-6 w-6 text-academic-gold dark:text-academic-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                  8+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Projects Created
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-50 to-academic-teal/20 p-6 dark:from-slate-800 dark:to-academic-teal/20">
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Teaching Specialties
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Algorithms",
              "Data Structures",
              "Calculus",
              "Algebra",
              "Web Development",
              "Problem Solving",
            ].map((subject) => (
              <span
                key={subject}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-academic-teal/20 text-academic-teal dark:bg-academic-teal/20 dark:text-academic-teal"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </Section> */}
    </div>
  );
}
