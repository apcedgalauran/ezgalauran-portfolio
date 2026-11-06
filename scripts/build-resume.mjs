// Builds public/resume.pdf from the same /data files the website uses, so the
// two can never disagree. It only uses content that is visible on the site
// (card summaries and highlights, not the full expanded details), which keeps
// it to a one-to-two-page summary. Requires Node 22.18+ (native TypeScript stripping)
// and a local Chrome or Edge install.
//
//   npm run resume
//
// Set CHROME_PATH to override browser detection.

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const load = (file) => import(pathToFileURL(join(root, "data", file)).href);

const { profile } = await load("profile.ts");
const { projects } = await load("projects.ts");
const { experience } = await load("experience.ts");
const { leadership } = await load("leadership.ts");
const { education } = await load("education.ts");
const { platforms } = await load("infrastructure.ts");

const esc = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const link = (href, text = bare(href)) =>
  `<a href="${esc(href)}">${esc(text)}</a>`;
const bullets = (items) =>
  items.length ? `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "";

// Projects without card highlights (the thesis) show their results instead.
const resumePoints = (p) =>
  p.highlights?.length
    ? p.highlights
    : (p.details.find((g) => g.heading.startsWith("Results"))?.items ?? []);

const projectHtml = projects
  .map((p) => {
    const meta = [p.dates, p.status].filter(Boolean).map(esc).join(" · ");
    return `
    <div class="entry">
      <div class="row"><h3>${esc(p.title)}</h3><span class="meta">${meta}</span></div>
      <p class="sub">${esc(p.label)}${p.role ? ` · ${esc(p.role)}` : ""}</p>
      <p>${esc(p.summary)}</p>
      ${bullets(resumePoints(p))}
      ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
      <p class="stack">${esc(p.stack.join(" · "))}</p>
    </div>`;
  })
  .join("");

const platformHtml = `<table class="platforms">${platforms
  .map(
    (pl) =>
      `<tr><td>${esc(pl.name)}</td><td>${esc(pl.what)} <span class="where">(${esc(pl.where.map((w) => (w === "this site" ? bare(profile.domain) : w)).join(", "))})</span></td></tr>`,
  )
  .join("")}</table>`;

const experienceHtml = experience
  .map(
    (e) => `
    <div class="entry">
      <div class="row"><h3>${esc(e.organization)}${e.program ? ` — ${esc(e.program)}` : ""}</h3><span class="meta">${esc(e.dates)}</span></div>
      <p class="sub">${esc(e.role)}</p>
      ${e.summary ? `<p>${esc(e.summary)}</p>` : ""}
      ${bullets(e.points)}
      ${e.links?.length ? `<p class="stack">${e.links.map((l) => link(l.href)).join(" · ")}</p>` : ""}
    </div>`,
  )
  .join("");

const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(profile.name)} — Resume</title>
<style>
  @page { size: A4; margin: 16mm 16mm 16mm 16mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
         font-size: 9.6pt; line-height: 1.45; color: #2b2b2b; }
  a { color: inherit; text-decoration: none; }
  h1 { font-size: 21pt; margin: 0; color: #0e0e0e; letter-spacing: -0.3pt; font-weight: 600; }
  .title { margin: 2pt 0 0; font-size: 10.5pt; color: #444; }
  .contact { margin: 6pt 0 0; font-family: Consolas, "SF Mono", monospace; font-size: 8.4pt; color: #555; }
  .tagline { margin: 10pt 0 0; }
  h2 { font-family: Consolas, "SF Mono", monospace; font-size: 8.2pt; font-weight: 600;
       text-transform: uppercase; letter-spacing: 1.2pt; color: #555;
       border-bottom: 0.6pt solid #bbb; padding-bottom: 3pt; margin: 15pt 0 7pt; }
  h3 { font-size: 10.2pt; margin: 0; color: #0e0e0e; font-weight: 600; }
  .entry { margin: 0 0 9pt; break-inside: avoid; }
  .row { display: flex; justify-content: space-between; gap: 12pt; align-items: baseline; }
  .meta { font-family: Consolas, "SF Mono", monospace; font-size: 8.2pt; color: #555; white-space: nowrap; }
  .sub { margin: 1pt 0 3pt; color: #444; font-style: italic; }
  p { margin: 2pt 0; }
  .k { font-weight: 600; color: #2b2b2b; margin-top: 3pt; }
  ul { margin: 1pt 0 2pt; padding-left: 13pt; }
  li { margin: 0.5pt 0; }
  .note { color: #555; font-size: 8.8pt; }
  .stack { font-family: Consolas, "SF Mono", monospace; font-size: 8pt; color: #555; margin-top: 3pt; }
  table { border-collapse: collapse; width: 100%; }
  td { padding: 1.5pt 0; vertical-align: baseline; }
  td.d { text-align: right; font-family: Consolas, "SF Mono", monospace; font-size: 8.2pt; color: #555; white-space: nowrap; }
  .platforms td:first-child { width: 78pt; font-family: Consolas, "SF Mono", monospace; font-size: 8.4pt; font-weight: 600; color: #0e0e0e; }
  .platforms td { padding: 1.8pt 0; }
  .where { color: #666; }
</style></head>
<body>
  <header>
    <h1>${esc(profile.name)}</h1>
    <p class="title">${esc(profile.title)}</p>
    <p class="contact">${link(`mailto:${profile.email}`, profile.email)} · ${link(profile.linkedin)} · ${link(profile.github)}</p>
    <p class="tagline">${esc(profile.tagline)}</p>
  </header>

  <h2>Education</h2>
  <div class="entry">
    <div class="row"><h3>${esc(education.degree)}</h3><span class="meta">${esc(education.dates)}</span></div>
    <p class="sub">${esc(education.school)}, ${esc(education.location)}</p>
    ${education.honors.map((h) => `<p>${esc(h)}</p>`).join("")}
    <p><span class="k">Relevant coursework:</span> ${esc(education.coursework.join(", "))}</p>
    ${education.certifications
      .map(
        (c) =>
          `<p><span class="k">Certification:</span> ${esc(c.name)} — ${esc(c.issuer)}, ${esc(c.date)}</p>`,
      )
      .join("")}
  </div>

  <h2>Experience</h2>
  ${experienceHtml}

  <h2>Projects</h2>
  ${projectHtml}

  <h2>Deployment &amp; Infrastructure</h2>
  ${platformHtml}

  <h2>Leadership</h2>
  <table>${leadership.roles
    .map(
      (r) =>
        `<tr><td><strong>${esc(r.role)}</strong>, ${esc(r.organization)}</td><td class="d">${esc(r.dates)}</td></tr>`,
    )
    .join("")}</table>
  <p class="k">Speaking &amp; hosting</p>
  ${bullets(leadership.speaking)}

</body></html>`;

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chrome/Edge found. Set CHROME_PATH.");
  process.exit(1);
}

const work = mkdtempSync(join(tmpdir(), "resume-"));
const htmlPath = join(work, "resume.html");
const outPath = join(root, "public", "resume.pdf");
writeFileSync(htmlPath, html, "utf8");

try {
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--user-data-dir=${join(work, "profile")}`,
      `--print-to-pdf=${outPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "pipe" },
  );
} finally {
  rmSync(work, { recursive: true, force: true });
}
console.log(`Wrote ${outPath}`);
