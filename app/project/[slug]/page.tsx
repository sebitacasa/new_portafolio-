import { client } from "@/sanity/lib/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import VideoShowcase from "@/components/VideoShowcase";
import AnimatedBackground from "@/components/AnimatedBackground";

async function getProjectData(slugOrId: string) {
  const query = `*[_type == "project" && (slug.current == $slugOrId || _id == $slugOrId)][0]{
    title,
    description,
    "images": images[].asset->url,
    technologies,
    githubUrl,
    liveUrl,
    demoVideoUrl
  }`;
  return await client.fetch(query, { slugOrId });
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectData(slug);
  if (!project) return notFound();

  return (
    <main className="relative bg-black text-zinc-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
      <AnimatedBackground count={14} />
      {/* NAV */}
      <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            BACK
          </span>
        </Link>
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          SR_ // [PROJECT_VIEW]
        </div>
      </nav>

      {/* TÍTULO PRINCIPAL */}
      <section className="pt-32 pb-0 px-6 md:px-8 max-w-[1400px] mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600 mb-3">
          // PROJECT_
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-4">
          <span className="title-gradient-flow">{project.title}</span>
        </h1>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[2px] bg-cyan-500" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            {project.technologies?.[0] || 'FULL_STACK'}
          </span>
        </div>
      </section>

      {/* BLOQUE 1: DEMO VIDEO (condicional) */}
      {project.demoVideoUrl && (
        <section className="pb-0 px-6 md:px-8 max-w-[1400px] mx-auto">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border-l-4 border-cyan-500 pl-4 text-cyan-400">
            01. LIVE_DEMO
          </h2>
          <VideoShowcase
            videoPath={project.demoVideoUrl}
            liveUrl={project.liveUrl}
            title={project.title}
          />
        </section>
      )}

      {/* BLOQUE 2: HEADER */}
      <section className="pt-16 pb-16 px-6 md:px-8 max-w-[1400px] mx-auto">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border-l-4 border-cyan-500 pl-4 text-cyan-400">
          {project.demoVideoUrl ? '02.' : '01.'} PROJECT_OVERVIEW
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-zinc-800 pt-10">
          {/* Descripción + acciones */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center border border-cyan-500 px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
              >
                GITHUB
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center border border-zinc-600 px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:border-white hover:text-white transition-all"
              >
                LIVE_DEMO
              </a>
            </div>

            {/* Metadata del proyecto */}
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest border border-zinc-800 bg-zinc-900/40 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-cyan-500 mb-2">Status</p>
                <p className="text-zinc-300 text-xs">Active Development</p>
              </div>
              <div>
                <p className="text-cyan-500 mb-2">Scope</p>
                <p className="text-zinc-300 text-xs">Full-Stack Architecture</p>
              </div>
              <div>
                <p className="text-cyan-500 mb-2">Primary Stack</p>
                <p className="text-zinc-300 text-xs">
                  {project.technologies?.[0] || "—"}
                </p>
              </div>
              <div>
                <p className="text-cyan-500 mb-2">Repo</p>
                <p className="text-zinc-300 text-xs">
                  {project.githubUrl ? "Public" : "Private"}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: perfil del desarrollador (datos del CV) */}
          <aside className="border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col gap-6 h-fit">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-500 mb-3">
                Developer
              </p>
              <h3 className="text-2xl font-black tracking-tighter text-white leading-tight">
                Sebastian Rodriguez
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1">
                Full-Stack Developer // Haag, AT
              </p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Background in formal logic, specialized in backend architecture
              (Node.js, PostgreSQL/PostGIS) and modern frontends (React, React
              Native).
            </p>

            <div className="border-t border-zinc-800 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "PostGIS",
                  "React",
                  "React Native",
                ].map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-widest border border-zinc-700 text-zinc-300 px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                Languages
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-300">
                ES (Native) / EN (Fluent) / DE (A1)
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500 space-y-1">
              <a
                href="mailto:seba.-14@hotmail.com"
                className="block hover:text-cyan-400 transition-colors"
              >
                seba.-14@hotmail.com
              </a>
              <p>+43 677 63681648</p>
            </div>
          </aside>
        </div>
      </section>

      {/* BLOQUE 3: TECH STACK */}
      <section className="pb-24 px-6 md:px-8 max-w-[1400px] mx-auto border-t border-zinc-800 pt-16">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border-l-4 border-cyan-500 pl-4 text-cyan-400">
          {project.demoVideoUrl ? '03.' : '02.'} TECH_STACK & ARCHITECTURE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.technologies?.map((tech: string, i: number) => (
            <div
              key={i}
              className="border border-zinc-800 bg-zinc-900/50 p-4 text-[10px] font-mono uppercase tracking-widest text-cyan-400 leading-relaxed whitespace-pre-line hover:border-cyan-500 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-8 text-[10px] font-mono uppercase tracking-widest border-t border-zinc-800 text-zinc-600">
        © {new Date().getFullYear()} SR.DEV // HAAG, AT
      </footer>
    </main>
  );
}
