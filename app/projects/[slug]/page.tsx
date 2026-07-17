import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import VideoPlayer from '@/components/VideoPlayer';
import RevealOnScroll from '@/components/RevealOnScroll';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <RevealOnScroll>
        <p className="text-accent font-bold text-sm tracking-widest mb-3">
          {project.tags?.join(' · ')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-[var(--muted)] text-lg mb-8">{project.summary}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-accent text-white font-bold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity mb-10"
        >
          VIEW ON GITHUB
        </a>
      </RevealOnScroll>

      {project.video && (
        <RevealOnScroll className="mb-10">
          <VideoPlayer src={project.video} />
        </RevealOnScroll>
      )}

      {project.images && project.images.length > 0 && (
        <RevealOnScroll className="grid sm:grid-cols-2 gap-4 mb-10">
          {project.images.map((img) => (
            <div
              key={img}
              className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border)]"
            >
              <Image src={img} alt={project.title} fill className="object-cover" />
            </div>
          ))}
        </RevealOnScroll>
      )}

      

      <RevealOnScroll className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-accent">
        <MDXRemote
          source={project.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </RevealOnScroll>
    </article>
  );
}
