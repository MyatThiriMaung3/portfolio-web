import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <RevealOnScroll>
          <p className="text-accent font-bold tracking-widest text-sm mb-4">
            FINAL YEAR SOFTWARE ENGINEERING STUDENT
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] mb-6 max-w-3xl">
            I build things that work, then make them work well.
          </h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mb-8">
            A collection of projects built while learning to be a better engineer —
            from scrappy weekend builds to full capstone work.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-accent text-white font-bold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              VIEW PROJECTS
            </a>
            <Link
              href="/cv"
              className="border border-[var(--border)] font-bold px-6 py-3 rounded-md hover:border-accent transition-colors"
            >
              VIEW CV
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} />
            </RevealOnScroll>
          ))}
          {projects.length === 0 && (
            <p className="text-[var(--muted)] col-span-full">
              No projects yet — run{' '}
              <code className="bg-[var(--card)] px-2 py-1 rounded">npm run new-project</code>{' '}
              to add your first one.
            </p>
          )}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-[var(--muted)] mb-6 max-w-lg">
            Open to internships, new-grad roles, and interesting collaborations.
          </p>
          <a href="mailto:maungmyatthiri@gmail.com" className="text-accent font-bold text-lg hover:underline">
            maungmyatthiri@gmail.com
          </a>
        </RevealOnScroll>
      </section>
    </>
  );
}
