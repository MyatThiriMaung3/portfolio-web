import RevealOnScroll from '@/components/RevealOnScroll';
import { formatDateRange, formatMonthYear } from '@/lib/date';

export const revalidate = 86400;

const experience = [
  {
    role: 'AI Developer Intern (remote)',
    org: 'Sentics',
    location: 'Wolfsburg, Lower Saxony, Germany',
    start: '2025-09-01',
    end: '2026-06-01',
    points: ['Flutter based mobile app development project'],
  },
  {
    role: 'Software Development Intern (on-site)',
    org: 'FPT IS',
    location: 'Lô B3 Đ. Sáng Tạo, Tân Thuận Đông, Quận 7, Hồ Chí Minh 756000',
    start: '2025-04-01',
    end: '2025-05-01',
    points: ['Data cleaning, data annotation, and model training'],
  },
  {
    role: 'Data Collector',
    org: null,
    location: null,
    start: '2022-05-01',
    end: '2022-06-01',
    points: ['Collecting data related to SDGs for a Senior\u2019s personal Project'],
  },
];

const volunteering = [
  {
    role: 'ENDORSER',
    org: 'Burma Academy',
    start: '2023-10-01',
    end: null, // null = ongoing, shows "Present" and live duration
  },
];

const technicalSkills = [
  { category: 'Programming Languages', items: ['Java', 'JavaScript', 'C', 'Python'] },
  { category: 'Android Development', items: ['Android Studio', 'XML'] },
  { category: 'Web Development', items: ['Node.js', 'Express.js', 'HTML', 'CSS'] },
  { category: 'Data & Tools', items: ['Git', 'GitHub', 'Docker', 'SQL', 'Firebase'] },
];

const languages = [
  { name: 'Burmese', level: 'Native' },
  { name: 'English', level: 'Limited Working Proficiency (IELTS 7.0)' },
];

const strengths = ['Problem-Solving', 'Communication', 'Logical-Thinking'];

const achievements = [
  {
    title: 'SAKURA SCIENCE HIGH-SCHOOL PROGRAM (Japan-Asia Youth Exchange Program)',
    org: 'Japan Science and Technology Agency (JST)',
    date: '2018-05-01',
    certificate: 'https://drive.google.com/file/d/14TySKVdr83sJK8vqaXhoP33NhE0gbkcy/view',
  },
  {
    title: 'VIETNAM DATATHON 2023',
    org: 'VNUHCM (University of Science) & Kyanon Digital',
    date: '2023-12-01',
    certificate: 'https://drive.google.com/file/d/1_WD_I8IOcooeebCdPDIKLzOxBZyb4IOX/view',
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">{children}</h2>
  );
}

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

      <RevealOnScroll className="mb-12 space-y-8">
        <SectionHeading>Education</SectionHeading>

        <div>
          <h3 className="font-bold text-lg">B.Sc. Software Engineering · 10/2022 - 06/2026</h3>
          <p className="text-[var(--muted)]">
            Ton Duc Thang University · Expected Graduation November 2026
          </p>
          <p className="text-[var(--muted)]">Accumulated GPA of semesters - 8.76/10</p>
        </div>

        <div>
          <h3 className="font-bold text-lg">B.Sc. Computer Science · 11/2019 - 02/2021</h3>
          <p className="text-[var(--muted)]">
            University of Information Technology (Yangon) · Dropped out of the university due to
            Military coup in Myanmar
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Graduate with 4 Distinctions out of 6 subjects · 2018 - 2019</h3>
          <p className="text-[var(--muted)]">D Wai Hlyan Private High School · 92/100 in Mathematics</p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mb-12">
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-8">
          {experience.map((e) => (
            <div key={e.role}>
              <h3 className="font-bold text-lg">{e.role}</h3>
              <p className="text-[var(--muted)] mb-2">
                {[e.org, e.location].filter(Boolean).join(' · ')}
                {e.org || e.location ? ' · ' : ''}
                {formatDateRange(e.start, e.end)}
              </p>
              <ul className="list-disc list-inside text-[var(--muted)] space-y-1">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mb-12">
        <SectionHeading>Volunteering</SectionHeading>
        <div className="space-y-4">
          {volunteering.map((v) => (
            <div key={v.role + v.org}>
              <h3 className="font-bold text-lg">
                {v.role} - {v.org}
              </h3>
              <p className="text-[var(--muted)]">{formatDateRange(v.start, v.end)}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mb-12">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="space-y-3">
          {technicalSkills.map((group) => (
            <p key={group.category} className="text-[var(--muted)]">
              <span className="font-bold text-[var(--fg)]">{group.category}</span> -{' '}
              {group.items.join(', ')}
            </p>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mb-12">
        <SectionHeading>Languages</SectionHeading>
        <div className="space-y-1">
          {languages.map((l) => (
            <p key={l.name} className="text-[var(--muted)]">
              <span className="font-bold text-[var(--fg)]">{l.name.toUpperCase()}</span> - {l.level}
            </p>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="mb-12">
        <SectionHeading>Strengths</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {strengths.map((s) => (
            <span
              key={s}
              className="text-sm font-bold px-3 py-1.5 rounded border border-[var(--border)]"
            >
              {s}
            </span>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SectionHeading>Achievements</SectionHeading>
        <div className="space-y-4">
          {achievements.map((a) => (
            <div key={a.title}>
              <h3 className="font-bold">{a.title}</h3>
              <p className="text-[var(--muted)] text-sm mb-1">
                {a.org} - {formatMonthYear(a.date)}
              </p>
              
                <a href={a.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-bold hover:underline"
              >
                View certificate ↗
              </a>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}