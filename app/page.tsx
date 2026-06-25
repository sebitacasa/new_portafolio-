import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import BumeranAnimation from "@/components/BumeranAnimation";
import { projects } from "@/lib/projects";

export default function Home() {

  return (
    <main className="relative bg-black text-zinc-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
      <AnimatedBackground />

      {/* NAV - TECH STYLE */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <span className="text-2xl font-black tracking-tighter text-cyan-400">
          SR_
        </span>
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          HAAG.AT // [SYSTEM_ONLINE]
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-[9vw] font-black tracking-[-0.05em] leading-[0.9] mb-12">
            <span className="title-gradient-flow">SEBASTIAN</span>
            <br />
            <span className="text-cyan-400 title-glow">RODRIGUEZ</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
            <p className="text-xl font-medium tracking-tight text-zinc-300">
              Full-Stack Developer. Building scalable, logic-driven applications
              with high operational precision.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="pb-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-12 border-l-4 border-cyan-500 pl-4 text-cyan-400 section-header">
          01. PROJECTS_INDEX
        </h2>

        <div className="flex flex-col gap-3">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <Link
                href={`/project/${project.id}`}
                className={`group relative overflow-hidden block border transition-colors duration-500 card-fx ${
                  project.inDevelopment
                    ? 'border-amber-500/30 hover:border-amber-400 card-wip'
                    : 'border-zinc-800 hover:border-cyan-500'
                }`}
              >
                {/* Animación bumerán */}
                {project.id === 'bumeran' && <BumeranAnimation />}

                {/* Video de fondo */}
                {project.demoVideoUrl && (
                  <video
                    src={project.demoVideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-700"
                    style={{ transition: 'opacity 0.7s ease, transform 0.7s ease' }}
                  />
                )}

                {/* Overlay gradient */}
                <div className={`absolute inset-0 pointer-events-none ${
                  project.inDevelopment
                    ? 'bg-gradient-to-r from-black/95 via-black/65 to-amber-950/15'
                    : 'bg-gradient-to-r from-black/90 via-black/50 to-black/10'
                }`} />

                {/* WIP badge */}
                {project.inDevelopment && (
                  <div className="absolute top-5 right-5 z-20 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-amber-400 border border-amber-500/40 px-3 py-1.5 bg-black/70 backdrop-blur-sm">
                    <span className="wip-dot w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    // IN_DEVELOPMENT_<span className="wip-cursor ml-0.5">▮</span>
                  </div>
                )}

                {/* Contenido */}
                <div className={`relative z-10 flex items-center justify-between px-8 py-10 md:py-12 ${
                  project.inDevelopment ? 'pb-14 md:pb-16' : ''
                }`}>
                  <div className="flex items-center gap-8">
                    <span className="font-mono text-[10px] text-zinc-700 shrink-0">0{i + 1}</span>
                    <div>
                      <span className={`font-mono text-[10px] uppercase tracking-widest block mb-2 ${
                        project.inDevelopment ? 'text-amber-500' : 'text-cyan-500'
                      }`}>
                        {project.technologies?.[0] || 'DEV'}
                      </span>
                      <h3 className={`text-3xl md:text-4xl font-black tracking-tighter transition-colors duration-300 ${
                        project.inDevelopment ? 'group-hover:text-amber-400' : 'group-hover:text-cyan-400'
                      }`}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <span className={`shrink-0 font-mono text-[10px] uppercase tracking-widest border px-4 py-2 transition-all duration-300 hidden sm:block ${
                    project.inDevelopment
                      ? 'border-amber-500/30 text-amber-500/60 group-hover:border-amber-400 group-hover:text-amber-400'
                      : 'border-zinc-700 text-zinc-500 group-hover:border-cyan-400 group-hover:text-cyan-400'
                  }`}>
                    VIEW →
                  </span>
                </div>

                {/* WIP progress bar */}
                {project.inDevelopment && (
                  <div className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-4">
                    <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest text-amber-500/40 mb-1.5">
                      <span>BUILD_PROGRESS</span>
                      <span>71%</span>
                    </div>
                    <div className="h-[1px] bg-zinc-800 overflow-hidden">
                      <div className="wip-bar h-full" />
                    </div>
                  </div>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ABOUT ME - DARK TECH */}
      <section
        id="about"
        className="py-32 px-8 max-w-7xl mx-auto border-t border-zinc-800"
      >
        <ScrollReveal>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-16 border-l-4 border-cyan-500 pl-4 text-cyan-400 section-header">
            02. BACKGROUND_IDENTITY
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-7">
            <ScrollReveal delay={0.1}>
              <h3 className="text-5xl font-black tracking-tighter leading-[1.1] mb-12 text-white">
                Logic-driven architecture from physical world experience.
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed mb-4">
                Full-Stack Developer with a unique background in formal logic,
                specialized in backend architecture (Node.js,
                PostgreSQL/PostGIS) and modern frontends (React, React Native).
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Through marriage to my Austrian wife, my life is now permanently
                based in Austria (valid WHV in place). Available immediately,
                fluent in English and currently learning German intensively.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 font-mono text-[10px] space-y-8 uppercase">
            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-zinc-600 mb-2">Backend & Databases</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "PostgreSQL", "PostGIS"].map((s) => (
                    <span
                      key={s}
                      className="border border-zinc-700 px-2 py-1 text-sm font-bold text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <p className="text-zinc-600 mb-2">Frontend & Mobile</p>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "React Native", "HTML", "CSS"].map(
                    (s) => (
                      <span
                        key={s}
                        className="border border-zinc-700 px-2 py-1 text-sm font-bold text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      >
                        {s}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div>
                <p className="text-zinc-600 mb-2">Tools & Methodologies</p>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "AI-Assisted Dev", "Agile"].map((s) => (
                    <span
                      key={s}
                      className="border border-zinc-700 px-2 py-1 text-sm font-bold text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <p className="text-zinc-600 mb-2">Global Ops</p>
                  <p className="text-sm font-bold text-white leading-relaxed">
                    JAPAN / AUSTRALIA
                    <br />
                    SWEDEN / AUSTRIA
                    <br />
                    ARGENTINA
                  </p>
                </div>
                <div>
                  <p className="text-zinc-600 mb-2">Languages</p>
                  <p className="text-sm font-bold text-white leading-relaxed">
                    ES (NATIVE)
                    <br />
                    EN (FLUENT)
                    <br />
                    DE (A1)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <ScrollReveal>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-12 text-zinc-500">
            // CERTIFICATIONS
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 mb-24">
          {[
            {
              title: "Full-Stack Web Developer",
              issuer: "Soy Henry",
              date: "2022",
              file: "/certs/henry-fullstack-certificate.pdf",
              image: "/certs/henry-fullstack-certificate.png",
              stack: ["JavaScript", "HTML", "CSS", "Node", "React", "Redux", "SQL"],
            },
            {
              title: "Node Acceleration Program",
              issuer: "Alkemy",
              date: "2023",
              file: "/certs/alkemy-node-certificate.pdf",
              image: "/certs/alkemy-node-certificate.png",
              stack: ["Node.js"],
            },
          ].map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.06}>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-zinc-800 hover:border-cyan-500 hover:bg-zinc-900 transition-all duration-300 card-fx"
              >
                <div className="relative w-full aspect-[1.414] overflow-hidden border-b border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6 pb-4">
                  <div>
                    <p className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1">
                      {cert.issuer} — {cert.date}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest border border-zinc-700 text-zinc-500 px-4 py-2 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all duration-300">
                    VIEW →
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 px-6 pb-6">
                  {cert.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-zinc-700 px-2 py-1 text-[10px] font-mono uppercase font-bold text-zinc-400 group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* EXPERIENCE TIMELINE */}
        <ScrollReveal>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-12 text-zinc-500">
            // EXPERIENCE_LOG
          </h3>
        </ScrollReveal>

        <div className="space-y-4">
          {[
            {
              role: "IT Intern (Web Development)",
              place: "Remote Startup, New Zealand",
              date: "Mar 2024 – Sep 2024",
              desc: "Supported web app development for an international remote team — debugging, agile workflows and implementing new features.",
            },
            {
              role: "IT Tutor (Programming)",
              place: "Henry Bootcamp, Argentina",
              date: "Mar 2021 – Dec 2021",
              desc: "Taught JavaScript programming, algorithms and problem-solving logic. Helped students debug and build full-stack applications.",
            },
            {
              role: "Full-Stack Web Developer Training",
              place: "Soy Henry Bootcamp, Argentina",
              date: "Mar 2021 – Jul 2022",
              desc: "Intensive full-stack training program covering JavaScript, React, Node.js and PostgreSQL.",
            },
          ].map((exp, i) => (
            <ScrollReveal key={exp.role} delay={i * 0.06}>
              <div className="group grid md:grid-cols-12 gap-4 border border-zinc-800 p-6 hover:border-cyan-500 hover:bg-zinc-900 transition-all duration-300 card-fx">
                <div className="md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                  {exp.date}
                </div>
                <div className="md:col-span-4">
                  <p className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1">
                    {exp.place}
                  </p>
                </div>
                <div className="md:col-span-5 text-sm text-zinc-400 leading-relaxed">
                  {exp.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-8 max-w-7xl mx-auto border-t border-zinc-800"
      >
        <ScrollReveal>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-16 border-l-4 border-cyan-500 pl-4 text-cyan-400 section-header">
            03. CONTACT
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] text-white">
              Based in Austria.
              <br />
              Available{" "}
              <span className="text-cyan-400 title-glow">immediately.</span>
            </h3>
            <div className="font-mono text-[10px] uppercase tracking-widest space-y-3">
              <a
                href="mailto:seba.-14@hotmail.com"
                className="block border border-zinc-700 px-6 py-4 text-zinc-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
              >
                seba.-14@hotmail.com
              </a>
              <div className="border border-zinc-700 px-6 py-4 text-zinc-300">
                +43 677 63681648
              </div>
              <div className="border border-zinc-700 px-6 py-4 text-zinc-300">
                Haag, Niederösterreich, AT
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <footer className="p-8 text-[10px] font-mono uppercase tracking-widest border-t border-zinc-800 text-zinc-600">
        © 2026 SR.DEV // HAAG, AT
      </footer>
    </main>
  );
}
