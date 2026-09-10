# Shaza Abdulnaser — AI & Data Science Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS, generated from Shaza Abdulnaser Sayed's CV.

## What's already in place

- Your photo is at `src/assets/shaza-photo.jpg` and is wired into the Hero section.
- Your CV is at `public/Shaza_Abdulnaser_CV.pdf` and the "Download CV" button in the Hero already points to it.
- All content (skills, experience, projects, education, activities) lives in `src/data/profile.js` — edit that one file to update site text without touching any component.

## Project structure

```
shaza-portfolio/
├── public/
│   ├── favicon.svg
│   └── Shaza_Abdulnaser_CV.pdf
├── src/
│   ├── assets/
│   │   └── shaza-photo.jpg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Reveal.jsx
│   │   │   └── SectionHeading.jsx
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Activities.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── profile.js       ← all CV-sourced content lives here
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Install

You need Node.js 18+ installed. From the project root:

```bash
npm install
```

## Run locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot reload.

## Build for production

```bash
npm run build
```

This outputs a static, production-ready site into the `dist/` folder.

To preview the production build locally before deploying:

```bash
npm run preview
```

## Deployment

The site is a static build, so it works on any static host. Two easy options:

**Vercel**
1. Push this project to a GitHub repository.
2. Import the repo at vercel.com → New Project.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

**Netlify**
1. Push this project to a GitHub repository (or drag-and-drop the `dist/` folder after running `npm run build`).
2. If connecting the repo: Build command `npm run build`, publish directory `dist`.
3. Deploy.

**GitHub Pages**
1. Run `npm run build`.
2. Deploy the contents of `dist/` to a `gh-pages` branch (e.g. using the `gh-pages` npm package), or use GitHub's "Deploy from a branch" setting pointed at a `docs/` folder if you rename `dist` to `docs`.

## Updating content later

- **Text content** (summary, skills, experience, projects, education, activities, contact links): edit `src/data/profile.js`.
- **Photo**: replace `src/assets/shaza-photo.jpg` with a new image of the same filename, or update the import in `src/components/sections/Hero.jsx`.
- **CV file**: replace `public/Shaza_Abdulnaser_CV.pdf` with an updated PDF of the same filename, or update `cvFile` in `src/data/profile.js`.
- **GitHub project links**: several projects in the CV don't list a public repository link. Once you have public repos for them, add the URL to the `github` field of the matching project object in `src/data/profile.js` and the "Repository link on request" label will automatically switch to a working "View repository" link.

## Notes on content decisions

- The CV lists activities (Hult Prize, GDG Assiut, IEEE, Rally BUA) rather than formal certifications, so the site includes an "Activities & involvement" section instead of a certifications section — nothing was invented to fill that space.
- No project in the CV lists a public GitHub repository URL, so project cards show "Repository link on request" rather than a fabricated link. Add real links in `src/data/profile.js` once available.
- The contact form is a UI-only convenience: submitting it opens the visitor's email client with a pre-filled message addressed to your email. There is no backend, so this is clearly labeled in the form itself rather than implying a message was sent.

## Pre-launch checklist

- [ ] Run `npm run dev` and click through every navbar link — confirm smooth scroll lands on the right section.
- [ ] Resize the browser (or use device toolbar) to check mobile, tablet, and desktop layouts, especially the Hero and Projects grid.
- [ ] Open the mobile hamburger menu and confirm it opens, scrolls, and closes correctly.
- [ ] Click "Download CV" and confirm the correct PDF opens/downloads.
- [ ] Click the GitHub and LinkedIn icons in the Navbar, Hero, and Footer — confirm they open the correct profiles in a new tab.
- [ ] Test the Projects filter buttons (All / Machine Learning / Deep Learning / Computer Vision).
- [ ] Fill out the Contact form and click "Open in email" — confirm your email client opens with the message pre-filled.
- [ ] Tab through the whole page using only the keyboard — confirm every interactive element shows a visible focus outline.
- [ ] Enable "reduce motion" in your OS settings and confirm animations are minimized.
- [ ] Run `npm run build && npm run preview` to sanity-check the production build before deploying.
