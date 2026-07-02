# skillui — Landingpage

Self-contained Marketing-Landingpage für **skillui** im MindBlow-Media-Branding.
Highlight: der automatische **Cookie/Consent-Dismiss** vor der Design-System-Extraktion.

- `index.html` — die komplette Seite (inline CSS + JS, keine Build-Schritte)
- `logo-head.png`, `logo-horizontal.png` — Markenlogos

## Deploy

Statische Seite, zero-config. Auf [Vercel](https://vercel.com):

1. **Add New Project → Import** dieses Repo
2. Framework Preset: *Other* (kein Build-Command nötig)
3. **Deploy**

Vercel deployt bei jedem Push automatisch neu.

Lokal ansehen:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

---

Entwickelt mit ❤ in München & Bangkok · MindBlow Media
