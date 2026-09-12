import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, ExternalLink, ArrowUpRight, Menu, X } from "lucide-react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
`;

const INK = "#1B2A4A";
const PAPER = "#FAF8F3";
const BLUE = "#2E5C8A";
const RUST = "#B5502E";
const LINE = "#C9C2B4";

function CrossMark({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} width="12" height="12">
      <line x1="8" y1="2" x2="8" y2="14" stroke={BLUE} strokeWidth="1" />
      <line x1="2" y1="8" x2="14" y2="8" stroke={BLUE} strokeWidth="1" />
    </svg>
  );
}

function SectionLabel({ index, title }) {
  return (
    <div className="flex items-baseline gap-3 mb-10">
      <span
        className="text-xs tracking-wider"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: BLUE }}
      >
        {index}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: LINE }} />
      <h2
        className="text-2xl sm:text-3xl"
        style={{ fontFamily: "'Zilla Slab', serif", color: INK, fontWeight: 600 }}
      >
        {title}
      </h2>
    </div>
  );
}

function CornerFrame({ children, className = "" }) {
  return (
    <div className={`relative border p-6 ${className}`} style={{ borderColor: LINE }}>
      <CrossMark className="absolute -top-[6px] -left-[6px]" />
      <CrossMark className="absolute -top-[6px] -right-[6px]" />
      <CrossMark className="absolute -bottom-[6px] -left-[6px]" />
      <CrossMark className="absolute -bottom-[6px] -right-[6px]" />
      {children}
    </div>
  );
}

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    rev: "R2",
    role: "React Native Developer Intern",
    org: "Mednertia Technologies",
    place: "Hyderabad",
    date: "Nov 2025 — Mar 2026",
    points: [
      "Built 10+ reusable UI components for a production healthcare app, cutting future screen build time and keeping architecture consistent across Android.",
      "Cut scroll lag 40% with FlatList virtualisation and React Hooks, improving responsiveness on low-end devices.",
    ],
  },
  {
    rev: "R1",
    role: "Java Intern",
    org: "DevElet",
    place: "Hyderabad",
    date: "Nov 2024 — Dec 2024",
    points: [
      "Raised database query performance 20% by tuning Spring Boot services with Hibernate and JPA.",
      "Shipped scalable REST APIs in Spring Boot, lifting system throughput 25%.",
      "Applied OOP principles and wrote maintainable code to team standards.",
    ],
  },
];

const PROJECTS = [
  {
    id: "01",
    name: "AI-Powered Email Assistant",
    date: "May — Jul 2025",
    link: "https://vinayemail.netlify.app/",
    desc: "A support tool that reads incoming email, classifies intent, and drafts replies automatically.",
    points: [
      "Integrated Google Gemini API for query classification and auto-reply generation, cutting manual handling effort 40%.",
      "Built a tracking system for query status so teams see progress end to end.",
      "Designed a REST API layer connecting the LLM backend to a React.js frontend.",
    ],
    stack: ["React.js", "Node/REST", "Gemini API"],
  },
  {
    id: "02",
    name: "Real-Time Chat Application",
    date: "Jul — Sep 2024",
    link: "https://vinaychatapp.netlify.app/",
    desc: "A group chat platform built for concurrent users and fast delivery.",
    points: [
      "Engineered real-time messaging with WebSockets/Socket.io at sub-100ms delivery for multiple concurrent users.",
      "Persisted chat history in a database so conversations survive across sessions.",
      "Structured the backend around microservices for independent scaling of components.",
    ],
    stack: ["Socket.io", "WebSockets", "Microservices"],
  },
];

const SKILLS = [
  {
    group: "Core Java",
    items: ["Core Java", "OOP", "Java Collections", "Multithreading", "Exception Handling"],
  },
  { group: "Data & Databases", items: ["DSA", "SQL", "MySQL", "JDBC"] },
  {
    group: "Spring Ecosystem",
    items: [
      "Spring Framework",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "Spring Security",
      "JWT Authentication",
    ],
  },
  { group: "Frontend", items: ["HTML, CSS & JavaScript", "React.js"] },
  {
    group: "Tools & DevOps",
    items: ["Git & GitHub", "Maven / Gradle", "JUnit & Mockito", "Docker", "AWS Basics"],
  },
  {
    group: "Ways of Working",
    items: ["Agile / Scrum", "Problem Solving", "Debugging & Troubleshooting", "AI-assisted Development"],
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundColor: PAPER,
        color: INK,
        fontFamily: "'Inter', sans-serif",
        backgroundImage:
          "linear-gradient(rgba(46,92,138,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,92,138,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        minHeight: "100vh",
      }}
      className="w-full"
    >
      <style>{FONTS}</style>

      {/* Nav */}
      <div
        className="sticky top-0 z-30 backdrop-blur-sm border-b"
        style={{ backgroundColor: "rgba(250,248,243,0.9)", borderColor: LINE }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("top")}
            className="text-sm tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: BLUE }}
          >
            VT — 001
          </button>
          <nav className="hidden sm:flex gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm transition-colors"
                style={{
                  color: active === n.id ? RUST : INK,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button className="sm:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={20} color={INK} /> : <Menu size={20} color={INK} />}
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden flex flex-col px-6 pb-4 gap-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-left"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: INK }}
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hero */}
      <section id="top" className="max-w-4xl mx-auto px-6 pt-16 pb-20">
        <div className="border" style={{ borderColor: LINE }}>
          <div className="p-8 sm:p-14">
            <p
              className="text-xs tracking-wider mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: BLUE }}
            >
              PORTFOLIO / DRAWING NO. VT-2026
            </p>
            <h1
              className="text-4xl sm:text-6xl leading-[1.05] mb-6"
              style={{ fontFamily: "'Zilla Slab', serif", fontWeight: 700, color: INK }}
            >
              Vinay Kumar
              <br />
              Talari
            </h1>
            <p className="text-base sm:text-lg max-w-xl mb-8" style={{ color: "#3E4C6A" }}>
              Java full-stack developer who builds APIs, services, and interfaces that
              hold up under load — from Spring Boot backends to React front ends.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="px-5 py-2.5 text-sm flex items-center gap-2"
                style={{ backgroundColor: INK, color: PAPER, fontFamily: "'JetBrains Mono', monospace" }}
              >
                View projects <ArrowUpRight size={14} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-5 py-2.5 text-sm border flex items-center gap-2"
                style={{ borderColor: INK, color: INK, fontFamily: "'JetBrains Mono', monospace" }}
              >
                Contact me
              </button>
            </div>
          </div>
          {/* title block, drafting-sheet style */}
          <div
            className="border-t grid grid-cols-2 sm:grid-cols-4 divide-x text-xs"
            style={{ borderColor: LINE }}
          >
            {[
              { label: "Role", value: "Full-Stack Dev" },
              { label: "Focus", value: "Java / React" },
              { label: "Based in", value: "Hyderabad, IN" },
              { label: "Status", value: "Open to work" },
            ].map((cell) => (
              <div key={cell.label} className="p-4" style={{ borderColor: LINE }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", color: BLUE }}>{cell.label}</p>
                <p className="mt-1" style={{ color: INK, fontWeight: 500 }}>
                  {cell.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/Talarivinaykumar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm"
            style={{ color: INK }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-kumar-talari-/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm"
            style={{ color: INK }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="mailto:talarivinaykumar2233@gmail.com"
            className="flex items-center gap-2 text-sm"
            style={{ color: INK }}
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <SectionLabel index="00" title="About" />
        <div className="grid sm:grid-cols-3 gap-10">
          <p className="sm:col-span-2 text-base leading-relaxed" style={{ color: "#3E4C6A" }}>
            I'm a B.Tech graduate in Information Technology from Malla Reddy College of
            Engineering and Technology (CGPA 8.66, 2023–2026). Two internships and two
            deployed projects have given me practical experience across the stack — Spring
            Boot and Hibernate on the backend, React and React Native on the front end. I've
            solved 200+ data structure and algorithm problems, and I care about writing code
            that performs well and stays easy to maintain.
          </p>
          <div className="space-y-4">
            <div className="border-l-2 pl-4" style={{ borderColor: RUST }}>
              <p className="text-2xl" style={{ fontFamily: "'Zilla Slab', serif", fontWeight: 600 }}>
                8.66
              </p>
              <p className="text-xs" style={{ color: BLUE, fontFamily: "'JetBrains Mono', monospace" }}>
                CGPA
              </p>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: RUST }}>
              <p className="text-2xl" style={{ fontFamily: "'Zilla Slab', serif", fontWeight: 600 }}>
                200+
              </p>
              <p className="text-xs" style={{ color: BLUE, fontFamily: "'JetBrains Mono', monospace" }}>
                DSA problems solved
              </p>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: RUST }}>
              <p className="text-2xl" style={{ fontFamily: "'Zilla Slab', serif", fontWeight: 600 }}>
                2
              </p>
              <p className="text-xs" style={{ color: BLUE, fontFamily: "'JetBrains Mono', monospace" }}>
                Live deployed projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
        <SectionLabel index="01" title="Experience" />
        <div className="relative pl-8" style={{ borderLeft: `1px solid ${LINE}` }}>
          {EXPERIENCE.map((job, i) => (
            <div key={job.rev} className="relative pb-12 last:pb-0">
              <div
                className="absolute -left-[41px] top-1 w-4 h-4 border-2 bg-white"
                style={{ borderColor: BLUE, backgroundColor: PAPER }}
              />
              <p
                className="text-xs mb-1 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: BLUE }}
              >
                {job.rev} · {job.date}
              </p>
              <h3 className="text-xl mb-1" style={{ fontFamily: "'Zilla Slab', serif", fontWeight: 600 }}>
                {job.role}
              </h3>
              <p className="text-sm mb-3" style={{ color: RUST }}>
                {job.org} — {job.place}
              </p>
              <ul className="space-y-2">
                {job.points.map((p, idx) => (
                  <li key={idx} className="text-sm leading-relaxed pl-4 relative" style={{ color: "#3E4C6A" }}>
                    <span className="absolute left-0" style={{ color: BLUE }}>
                      —
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
        <SectionLabel index="02" title="Projects" />
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => (
            <CornerFrame key={proj.id}>
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: BLUE }}
                >
                  FIG. {proj.id}
                </span>
                <span className="text-xs" style={{ color: "#7A7266" }}>
                  {proj.date}
                </span>
              </div>
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Zilla Slab', serif", fontWeight: 600 }}>
                {proj.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: RUST }}>
                {proj.desc}
              </p>
              <ul className="space-y-2 mb-4">
                {proj.points.map((p, idx) => (
                  <li key={idx} className="text-sm leading-relaxed pl-4 relative" style={{ color: "#3E4C6A" }}>
                    <span className="absolute left-0" style={{ color: BLUE }}>
                      —
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 border"
                    style={{ borderColor: LINE, color: BLUE, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm"
                style={{ color: INK, fontWeight: 500 }}
              >
                Live demo <ExternalLink size={13} />
              </a>
            </CornerFrame>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
        <SectionLabel index="03" title="Skills" />
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {SKILLS.map((group) => (
            <div key={group.group}>
              <p
                className="text-xs mb-3 pb-2 border-b"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: BLUE,
                  borderColor: LINE,
                }}
              >
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5"
                    style={{ backgroundColor: "#F0ECE1", color: INK }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <SectionLabel index="04" title="Achievements" />
        <ul className="space-y-3">
          <li className="text-sm leading-relaxed pl-5 relative" style={{ color: "#3E4C6A" }}>
            <span className="absolute left-0" style={{ color: RUST }}>
              ▸
            </span>
            Solved 200+ Data Structures &amp; Algorithms problems on LeetCode and
            GeeksforGeeks.
          </li>
          <li className="text-sm leading-relaxed pl-5 relative" style={{ color: "#3E4C6A" }}>
            <span className="absolute left-0" style={{ color: RUST }}>
              ▸
            </span>
            Built and deployed 2 full-stack applications with live demos, end to end.
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="border p-8 sm:p-14 text-center" style={{ borderColor: LINE }}>
          <p
            className="text-xs tracking-wider mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: BLUE }}
          >
            05 / CONTACT
          </p>
          <h2
            className="text-3xl sm:text-4xl mb-6"
            style={{ fontFamily: "'Zilla Slab', serif", fontWeight: 600, color: INK }}
          >
            Let's build something together.
          </h2>
          <p className="max-w-md mx-auto mb-8 text-sm" style={{ color: "#3E4C6A" }}>
            Open to Java and full-stack developer roles. Reach out directly — I reply fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:talarivinaykumar2233@gmail.com"
              className="px-5 py-2.5 text-sm flex items-center gap-2"
              style={{ backgroundColor: INK, color: PAPER, fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Mail size={14} /> talarivinaykumar2233@gmail.com
            </a>
            <a
              href="tel:+918106865580"
              className="px-5 py-2.5 text-sm border flex items-center gap-2"
              style={{ borderColor: INK, color: INK, fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Phone size={14} /> +91 8106865580
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 pb-10 pt-4 flex justify-between text-xs" style={{ color: "#7A7266" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>© 2026 Vinay Kumar Talari</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>SHEET 1 OF 1</span>
      </footer>
    </div>
  );
}
