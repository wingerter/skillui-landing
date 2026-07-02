# skillui — Landing page

Self-contained marketing landing page for **skillui**, in the MindBlow Media brand.
Highlight: the automatic **cookie / consent dismiss** before design-system extraction.
Bilingual, English is the default.

| File | Purpose |
|------|---------|
| `index.html` | English landing page (**default** — served at `/`) |
| `de.html` | German version (served at `/de.html`) |
| `styles.css` | Shared stylesheet (MindBlow Media tokens + layout) |
| `app.js` | Shared behaviour (cookie-dismiss demo, scroll reveal) |
| `demo.mp4` | Hero demo video (self-hosted, ~8 MB) |
| `logo-head.png`, `logo-horizontal.png` | Brand logos |

A language switch (EN / DE) sits in the header and footer of both pages.

## Deploy

Static site, zero config. On [Vercel](https://vercel.com): **Add New Project → Import**
this repo, framework preset *Other* (no build command), **Deploy**. Vercel redeploys
on every push.

View locally:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

---

Made with ❤ in Munich & Bangkok · MindBlow Media
