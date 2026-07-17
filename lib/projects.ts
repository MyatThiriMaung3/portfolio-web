import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  cover: string;
  tags: string[];
  github: string;
  video?: string;
  images?: string[];
  featured?: boolean;
  date?: string;
};

export function getAllProjects(): (ProjectFrontmatter & { content: string })[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.mdx'));

  const projects = files.map((filename) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), 'utf-8');
    const { data, content } = matter(raw);
    return { ...(data as ProjectFrontmatter), content };
  });

  return projects.sort((a, b) =>
    a.date && b.date ? +new Date(b.date) - +new Date(a.date) : 0
  );
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((p) => p.slug === slug);
}
