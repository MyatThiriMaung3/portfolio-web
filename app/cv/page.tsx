import RevealOnScroll from '@/components/RevealOnScroll';

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <RevealOnScroll className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
        <a
          href="/resume.pdf"
          className="bg-accent text-white font-bold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
        >
          DOWNLOAD PDF
        </a>
      </RevealOnScroll>

      <RevealOnScroll className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">
          Education
        </h2>
        <div>
          <h3 className="font-bold text-lg">B.Sc. Software Engineering</h3>
          <p className="text-[var(--muted)]">Ton Duc Thang University · Expected Graduation November 2026</p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">Role Title</h3>
            <p className="text-[var(--muted)] mb-2">Company Name · Month Year – Month Year</p>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-1">
              <li>What you did, with a measurable result if possible.</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <h2 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'].map((skill) => (
            <span
              key={skill}
              className="text-sm font-bold px-3 py-1.5 rounded border border-[var(--border)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
