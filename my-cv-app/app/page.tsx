import React from "react";

export default function CVPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-purple-200 dark:border-purple-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text animate-fadeInUp">
                Amirhossein Bayani
              </h1>
              <p className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-semibold animate-fadeInUp">
                Full Stack Software Developer
              </p>
            </div>

            <div className="flex gap-3 animate-fadeInUp">
              <a
                href="https://www.linkedin.com/in/amirhosseinbayani/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">LinkedIn</span>
              </a>
              <a
                href="https://github.com/teman67"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">GitHub</span>
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-purple-600"
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
              <span>79111 Freiburg, BW, Germany</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+49 1573 969 3972</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>amirhossein.bayani@gmail.com</span>
            </div>
          </div>

          <div className="mt-4 px-4 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg border border-purple-300 dark:border-purple-700">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              🇩🇪 Permanent Resident — Germany (Unrestricted Work Permit - Die
              Niederlassungserlaubnis)
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Summary */}
        <section className="mb-12">
          <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-200 dark:border-purple-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Summary
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Full-Stack Software Developer (3+ years) specializing in
              AI-enabled applications. Experienced with Python/Django/FastAPI,
              Next.js, PostgreSQL, Docker, and cloud deployment. Developed RAG
              systems, semantic-web tools, and NLP pipelines for real-world
              applications. Experienced in building APIs, end-to-end data
              workflows, and web platforms. Open to onsite, hybrid, or remote
              opportunities.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-200 dark:border-purple-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                  <span className="font-semibold text-purple-700 dark:text-purple-300 block mb-2">
                    Languages & Frameworks
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "JavaScript",
                      "Django",
                      "Next.js",
                      "React",
                      "HTML",
                      "CSS",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-purple-200 dark:border-purple-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                  <span className="font-semibold text-blue-700 dark:text-blue-300 block mb-2">
                    Databases
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MySQL", "Supabase"].map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-blue-200 dark:border-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 p-4 rounded-xl border border-pink-200 dark:border-pink-800">
                  <span className="font-semibold text-pink-700 dark:text-pink-300 block mb-2">
                    Tools & DevOps
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "Heroku", "FastAPI", "VS Code"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="skill-tag px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-pink-200 dark:border-pink-700"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300 block mb-2">
                    AI/ML
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "CNN",
                      "TensorFlow",
                      "Scikit-Learn",
                      "LLM",
                      "RAG",
                      "NER",
                      "Fine-tuning",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-emerald-200 dark:border-emerald-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-4 rounded-xl border border-amber-200 dark:border-amber-800">
                  <span className="font-semibold text-amber-700 dark:text-amber-300 block mb-2">
                    AI-assisted Development
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["GitHub Copilot", "Cursor AI"].map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-amber-200 dark:border-amber-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/30 dark:to-violet-900/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300 block mb-2">
                    Languages
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["English (C1)", "German (B1)", "Persian (Native)"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="skill-tag px-3 py-1 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-indigo-200 dark:border-indigo-700"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-l-4 border-purple-500">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Semantic Web Developer
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">
                    University of Freiburg, Freiburg, Germany
                  </p>
                </div>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold whitespace-nowrap">
                  2024/06 - Current
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">✦</span>
                  <span>
                    Developed 3 LLM-powered web applications for automatic
                    semantic metadata generation using Django, PostgreSQL, and
                    Supabase, serving 50+ researchers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">✦</span>
                  <span>
                    Created and maintained ontologies in materials science,
                    improving data interoperability across 3+ research projects
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">✦</span>
                  <span>
                    Automated research data workflows using electronic lab
                    notebooks (openBIS), reducing manual data entry by 60%
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">✦</span>
                  <span>
                    Collaborated with interdisciplinary teams to implement
                    semantic web standards (RDF, OWL, SHACL) for knowledge graph
                    construction
                  </span>
                </li>
              </ul>
            </div>

            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-l-4 border-blue-500">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Scientific Researcher
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    Fraunhofer IWM, Freiburg, Germany
                  </p>
                </div>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold whitespace-nowrap">
                  2021/07 – 2023/07
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">✦</span>
                  <span>
                    Conducted large-scale computational simulations on material
                    systems
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">✦</span>
                  <span>
                    Developed AI-driven materials modeling algorithms using
                    TensorFlow and Scikit-Learn, improving prediction accuracy
                    by 25%
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">✦</span>
                  <span>
                    Led interdisciplinary collaboration with 15+ researchers
                    across 3 European institutions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">✦</span>
                  <span>
                    Published 2 peer-reviewed papers and supervised 3 junior
                    researchers and master's students
                  </span>
                </li>
              </ul>
            </div>

            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-l-4 border-emerald-500">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Postdoctoral Researcher
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Uppsala University, Uppsala, Sweden
                  </p>
                </div>
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold whitespace-nowrap">
                  2018/10 – 2020/10
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✦</span>
                  <span>
                    Led 3 independent research projects integrating
                    computational models with experimental validation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✦</span>
                  <span>
                    Developed custom Python scripts for data analysis and
                    visualization, processing multi-terabyte datasets
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✦</span>
                  <span>
                    Delivered 3 conference presentations and 3 publications in
                    high-impact journals
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✦</span>
                  <span>
                    Established international collaborations resulting in 2
                    joint research proposals
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-200 dark:border-purple-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Diploma: Full Stack Software Development
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Code Institute – Dublin, Ireland
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium whitespace-nowrap">
                  2023/08 – 2024/03
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Ph.D.: Nanotechnology Engineering
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Kashan University - Kashan, Iran
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium whitespace-nowrap">
                  2013/09 – 2017/09
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    MSc & BSc: Physics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ferdowsi University - Mashhad, Iran
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium whitespace-nowrap">
                  2006/09 – 2013/07
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Selected Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-200 dark:border-purple-900 hover:border-purple-400 dark:hover:border-purple-600">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  NextJS + FastAPI Full-stack RDF/SHACL Application
                </h3>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold whitespace-nowrap">
                  2025
                </span>
              </div>
              <div className="flex gap-3 mb-3">
                <a
                  href="https://github.com/teman67/IUC02_NextJS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  GitHub →
                </a>
                <a
                  href="https://iuc-02-demonstrator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  "FastAPI",
                  "NextJS",
                  "AI Chatbox",
                  "TailWind CSS",
                  "RDF",
                  "SHACL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  <span>
                    Workflow for evaluating experimental/modeling methods and
                    uncertainties
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Deployed on Heroku and Vercel with CI/CD pipeline</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  <span>
                    Implements community-driven processes for reference material
                    data sets
                  </span>
                </li>
              </ul>
            </div>

            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-blue-200 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Metadata Schema Generator with LLMs
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold whitespace-nowrap">
                  2025
                </span>
              </div>
              <div className="flex gap-3 mb-3">
                <a
                  href="https://github.com/teman67/LLM_metadata_django_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  GitHub →
                </a>
                <a
                  href="https://llm-metadata-django-app.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  "Django 4.2",
                  "PostgreSQL",
                  "Ollama AI",
                  "Supabase",
                  "Bootstrap",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Auto-generates research metadata using LLMs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>
                    User authentication, file upload, and real-time processing
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>
                    Reduced metadata creation time from 2 hours to 10 minutes
                  </span>
                </li>
              </ul>
            </div>

            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-emerald-200 dark:border-emerald-900 hover:border-emerald-400 dark:hover:border-emerald-600">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  RDF/SHACL Generator with AI Agents
                </h3>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-semibold whitespace-nowrap">
                  2023
                </span>
              </div>
              <div className="flex gap-3 mb-3">
                <a
                  href="https://github.com/teman67/AgentSem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  GitHub →
                </a>
                <a
                  href="https://agent-rdf-shacl-creator-0f2d13e6fb10.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "FastAPI", "RDFLib", "NetworkX"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>
                    Converts material test data into structured knowledge graphs
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>
                    SHACL validation ensuring 95% data quality compliance
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>Integrated with existing research infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-amber-200 dark:border-amber-900 hover:border-amber-400 dark:hover:border-amber-600">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  ML Plant Disease Classification
                </h3>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-xs font-semibold whitespace-nowrap">
                  2025
                </span>
              </div>
              <div className="flex gap-3 mb-3">
                <a
                  href="https://github.com/teman67/Plant-Disease-Classification-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  GitHub →
                </a>
                <a
                  href="https://plant-disease-classification-mlops.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["TensorFlow", "CNN", "Streamlit", "Python", "MLOps"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  <span>
                    CNN model achieving 94% accuracy on plant disease detection
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  <span>
                    Interactive web interface with real-time classification
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  <span>Model optimization reducing inference time by 40%</span>
                </li>
              </ul>
            </div>

            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-pink-200 dark:border-pink-900 hover:border-pink-400 dark:hover:border-pink-600">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  LLM-Powered Annotation Application
                </h3>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-xs font-semibold whitespace-nowrap">
                  2023
                </span>
              </div>
              <div className="flex gap-3 mb-3">
                <a
                  href="https://github.com/teman67/Annotation_NER_LLM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  GitHub →
                </a>
                <a
                  href="https://annotation-by-llm.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  "Streamlit",
                  "Python",
                  "OpenAI",
                  "Claude AI",
                  "NER",
                  "LLM",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-pink-500">•</span>
                  <span>Automatically annotates scientific text with LLMs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-500">•</span>
                  <span>Chunk-based processing with multi-format export</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-500">•</span>
                  <span>Improved annotation efficiency by 70%</span>
                </li>
              </ul>
            </div>

            <div className="section-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-indigo-200 dark:border-indigo-900 hover:border-indigo-400 dark:hover:border-indigo-600">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  E-Learning Booking Platform
                </h3>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold whitespace-nowrap">
                  2024
                </span>
              </div>
              <div className="flex gap-3 mb-3">
                <a
                  href="https://github.com/teman67/E-Learning-Booking-Courses-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  GitHub →
                </a>
                <a
                  href="https://e-learning-booking-courses-project.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Live Demo →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Django", "PostgreSQL", "Bootstrap", "Supabase"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>Full CRUD operations for courses and bookings</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>Email notifications and administrative dashboard</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>Responsive design for mobile and desktop</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">Amirhossein Bayani</p>
              <p className="text-purple-200 text-sm">
                Full Stack Software Developer
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/amirhosseinbayani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/teman67"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.179 14.945 11 12 11c-2.945 0-5.548 1.179-6.758 2.769z" />
                  <path d="M12 20c-4.411 0-8-3.589-8-8 0-.691.089-1.363.247-2.006C5.132 8.721 8.234 7.5 12 7.5c3.766 0 6.868 1.221 7.753 2.494.158.643.247 1.315.247 2.006 0 4.411-3.589 8-8 8z" />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-purple-700 text-center">
            <p className="text-purple-200 text-sm">
              © 2025 Amirhossein Bayani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
