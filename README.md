# SM Portfolio

Personal portfolio of Suhejb Musliu, built with React and Tailwind CSS.

It works like a small app instead of a long page: a sidebar on the left,
and the chosen section in a panel on the right. On phones the sidebar
becomes a drawer opened from the top bar.

---

## What's inside

- Short "SM" preloader on first load
- **Home**, **About**, **Projects**, **Skills**, **Contact**, switched from
  the sidebar (no page reload, no router)
- Projects: five projects with description, tech icons and a live link
  (four of them)
- Skills with brand icons (react-icons)
- Contact: email (`mailto:`), GitHub, LinkedIn, and a "View CV" link to
  `public/SuhejbCV-CE.pdf`

There is no backend or contact form.

---

## Tech stack

| Area | Tool |
|---|---|
| Build | Vite 5 |
| UI | React 18 |
| Styling | Tailwind CSS 3 |
| Icons | react-icons |

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the build locally |

---

## Project structure

```
src/
  App.jsx                preloader, then the app shell
  components/
    Preloader.jsx
    layout/              AppShell (state for the open section), Sidebar,
                         MobileTopbar, ContentPanel
  pages/                 Home, About, Projects, Skills, Contact
  data/                  all content (see below)
  assets/profile.jpg
public/SuhejbCV-CE.pdf   the CV linked from Contact
```

---

## Editing content

Everything is in `src/data/`:

| File | What |
|---|---|
| `profile.js` | Name, role, summary, location, email, phone, GitHub / LinkedIn / CV links |
| `projects.js` | Projects (title, description, tech, live link, featured) |
| `skills.js` | Skills and their icons |
| `education.js` | Education and courses |
| `navLinks.js` | Sidebar sections |

To replace the CV, put the new PDF in `public/` and update `links.cv` in
`profile.js`.

---

## Deployment

`npm run build` writes a static site to `dist/`. There is no hosting config
in the repo, so any static host works (Vercel, Netlify, or plain file
hosting).
