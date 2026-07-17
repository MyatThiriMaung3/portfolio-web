# Portfolio Starter

Next.js 14 (App Router) + Tailwind + MDX content, built around your palette
(`#EAEAEA #FFFFFF #000000 #BABABA #DA3131 #626262 #282828`) and Saira Condensed.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add a new project (automated)

```bash
npm run new-project
```

It asks for: title, GitHub repo URL, video URL, tags, cover image. It then fetches
the repo's `README.md` automatically and lets you choose:

1. Use the README as-is
2. Write your own description from scratch
3. README + your own extra section on top

It writes `content/projects/<slug>.mdx` — open that file afterward to fine-tune
wording, swap in real image paths, etc. This is a **local script**, so nothing
gets pushed anywhere until you `git commit` / `git push` yourself — safe to
run as many times as you like.

## Add images

Drop images in `public/images/projects/<slug>/` and reference them as
`/images/projects/<slug>/screenshot.png` in a project's frontmatter (`cover`
or the `images` array).

## Add your resume

Place your PDF at `public/resume.pdf` — both the navbar "RESUME" button and
the CV page "DOWNLOAD PDF" button already link there.

## Customize

- Colors: `tailwind.config.ts`
- Fonts: already wired to Saira Condensed in `app/layout.tsx`
- Nav links / name: `components/Navbar.tsx`
- Hero copy, contact email: `app/page.tsx`
- CV content: `app/cv/page.tsx`

## Deploy

1. `git init && git add . && git commit -m "init"` then push to a GitHub repo.
2. Import the repo in [Vercel](https://vercel.com/new) — it auto-detects Next.js.
3. Project Settings → Domains → attach your custom domain.
4. Every push to `main` auto-deploys.

## Notes

- Video component auto-detects YouTube links (`youtube.com` / `youtu.be`) and
  embeds them; any other URL is rendered as a native `<video>` tag, so a
  direct-hosted file (Cloudinary, Vercel Blob, etc.) works too.
- Avoid committing large video files directly into this repo — host them
  externally and just reference the URL in the project's frontmatter.
