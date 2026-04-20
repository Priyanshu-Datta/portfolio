export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md sticky top-0">
        <h1 className="text-xl font-bold">Priyanshu Datta</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Backend & AI/ML Developer 🚀
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          I build scalable backend systems using Java, Spring Boot, and explore AI/ML solutions using Python.
        </p>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="text-center py-12 px-4">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I am a Computer Science student specializing in backend development and AI/ML.
          I enjoy building scalable systems, designing APIs, and solving real-world problems using data-driven approaches.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 text-center">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>

        {/* Backend */}
        <h4 className="text-lg font-semibold mb-3 text-blue-400">Backend</h4>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["Java", "Spring Boot", "REST API", "MySQL"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              {skill}
            </span>
          ))}
        </div>

        {/* Core CS */}
        <h4 className="text-lg font-semibold mb-3 text-blue-400">Core CS</h4>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["DSA", "Problem Solving"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              {skill}
            </span>
          ))}
        </div>

        {/* AI / ML */}
        <h4 className="text-lg font-semibold mb-3 text-blue-400">AI / ML</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {["Machine Learning", "Data Science", "Python", "NumPy", "Pandas"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* What I Build */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-semibold mb-6">What I Build</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "REST APIs",
            "Database Design",
            "Authentication Systems",
            "Multithreading Apps",
            "ML Models"
          ].map((item) => (
            <span key={item} className="bg-gray-800 px-5 py-2 rounded-lg hover:bg-gray-700 transition">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold">water pollution detection</h4>
            <p className="text-gray-400 mt-2">
              Developed a CNN-based image classification model to detect water pollution levels (Clean, Moderate, Polluted).
            </p>

            <a
              href="https://github.com/priyanshu-datta"
              target="_blank"
              className="text-blue-400 mt-3 inline-block"
            >
              View Code →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold">Pothole Detection (ML)</h4>
            <p className="text-gray-400 mt-2">
              CNN-based model to detect potholes using image processing techniques.
            </p>

            <a
              href="https://github.com/priyanshu-datta"
              target="_blank"
              className="text-blue-400 mt-3 inline-block"
            >
              View Code →
            </a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 text-center">
        <h3 className="text-2xl font-semibold mb-6">Contact</h3>

        <div className="flex justify-center gap-8 text-lg">
          <a
            href="https://github.com/priyanshu-datta"
            target="_blank"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/priyanshu-datta-0b9b82328"
            target="_blank"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:priyanshudatta80@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 text-gray-400">
        © 2026 Priyanshu Datta
      </footer>
    </div>
  );
}