import type { Metadata } from "next";
import { Saira_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Myat Thiri Maung - Portfolio",
  description:
    "Final year Software Engineering student — projects, CV, and case studies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${saira.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="border-t border-[var(--border)] py-8 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[var(--muted)]">
                © {new Date().getFullYear()} Myat Thiri Maung. All rights
                reserved.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="mailto:maungmyatthiri@gmail.com"
                  className="text-sm text-[var(--muted)] hover:text-accent transition-colors"
                >
                  maungmyatthiri@gmail.com
                </a>

                <a
                  href="https://github.com/MyatThiriMaung3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border)] hover:border-accent transition-colors"
                >
                  <Image
                    src="/icons/github.png"
                    alt="GitHub"
                    width={16}
                    height={16}
                  />
                </a>

                <a
                  href="www.linkedin.com/in/myat-thiri-maung-137216230"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border)] hover:border-accent transition-colors"
                >
                  <Image
                    src="/icons/linkedin.png"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
