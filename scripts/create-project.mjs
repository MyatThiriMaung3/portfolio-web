#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseGithubUrl(url) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

async function fetchReadme(owner, repo) {
  for (const branch of ['main', 'master']) {
    try {
      const res = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`
      );
      if (res.ok) return await res.text();
    } catch {
      // network hiccup, try next branch
    }
  }
  return null;
}

async function main() {
  console.log('\n📦 New Project Generator\n');

  const title = await ask('Project title: ');
  const summary = await ask('One-line summary: ');
  const github = await ask('GitHub repo URL: ');
  const video = await ask('Video URL (YouTube or direct file, optional): ');
  const tagsRaw = await ask('Tags (comma-separated, e.g. React, Node, PostgreSQL): ');
  const cover = await ask('Cover image path/URL (optional, e.g. /images/projects/x.png): ');

  const tags = tagsRaw.split(',').map((t) => t.trim()).filter(Boolean);
  const slug = slugify(title);
  const parsed = parseGithubUrl(github);

  let readmeContent = '## About this project\n\nWrite your own explanation here.\n';

  if (parsed) {
    console.log(`\nFetching README from ${parsed.owner}/${parsed.repo}...`);
    const readme = await fetchReadme(parsed.owner, parsed.repo);

    if (readme) {
      console.log('✓ README found.\n');
      const choice = await ask(
        'Use it as:\n  [1] README as-is\n  [2] Write my own from scratch\n  [3] README + my own extra section on top\n> '
      );

      if (choice.trim() === '1') {
        readmeContent = readme;
      } else if (choice.trim() === '3') {
        const extra = await ask(
          '\nWrite the extra section you want to add above the README:\n> '
        );
        readmeContent = `## My notes\n\n${extra}\n\n---\n\n${readme}`;
      }
      // choice === '2' or anything else keeps the "write your own" placeholder
    } else {
      console.log('⚠ No README.md found on main/master branch. Using a placeholder — write your own below.\n');
    }
  } else {
    console.log('⚠ Could not parse GitHub URL — skipping README fetch.\n');
  }

  const frontmatter = `---
title: "${title}"
slug: "${slug}"
summary: "${summary}"
cover: "${cover || '/images/projects/placeholder.png'}"
tags: [${tags.map((t) => `"${t}"`).join(', ')}]
github: "${github}"
${video ? `video: "${video}"` : '# video: ""'}
images: []
featured: false
date: "${new Date().toISOString().slice(0, 10)}"
---

`;

  const dir = path.join(process.cwd(), 'content/projects');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    const overwrite = await ask(`\n${filePath} already exists. Overwrite? (y/n): `);
    if (overwrite.trim().toLowerCase() !== 'y') {
      console.log('Cancelled.');
      rl.close();
      return;
    }
  }

  fs.writeFileSync(filePath, frontmatter + readmeContent);
  console.log(`\n✅ Created ${filePath}`);
  console.log('Open it to fine-tune the writeup and add real image paths.\n');

  rl.close();
}

main();
