import Link from 'next/link';
import Image from 'next/image';
import type { ProjectFrontmatter } from '@/lib/projects';

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-[var(--border)] rounded-lg overflow-hidden hover:border-accent transition-colors"
    >
      <div className="relative aspect-[16/10] bg-[var(--card)] overflow-hidden">
        {project.cover && (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-1">{project.title}</h3>
        <p className="text-[var(--muted)] text-sm mb-3">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold px-2 py-1 rounded border border-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
