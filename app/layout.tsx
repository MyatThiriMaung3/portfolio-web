import type { Metadata } from 'next';
import { Saira_Condensed } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-saira',
});

export const metadata: Metadata = {
  title: 'Myat Thiri Maung - Portfolio',
  description:
    'Final year Software Engineering student — projects, CV, and case studies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${saira.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="border-t border-[var(--border)] py-8 px-6 text-sm text-[var(--muted)] flex flex-col sm:flex-row justify-between gap-2 max-w-6xl mx-auto">
            <p>© {new Date().getFullYear()} Myat Thiri Maung. All rights reserved.</p>
            <a href="mailto:maungmyatthiri@gmail.com" className="hover:text-accent transition-colors">
              maungmyatthiri@gmail.com
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
