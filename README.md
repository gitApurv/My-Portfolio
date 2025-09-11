# 🚀 Apurv Maurya - Developer Portfolio

A modern, fully responsive single-page **Next.js** portfolio built with **TypeScript** and **Tailwind CSS**, designed to showcase my skills, projects, and professional background.

[**🌐 Live Preview**](https://my-portfolio-eight-theta-70.vercel.app/)

## ✨ Features

- ⚡ **Single-Page Modern Stack:** Next.js with App Router for fast performance and smooth developer experience.

- 🛡️ **Type-Safe Code:** Written entirely in TypeScript for robust and maintainable code.

- 📱 **Responsive Design:** Tailwind CSS ensures a seamless experience across all devices.

- **🧩 Dynamic Sections:**

  - 👋 **Hero:** Introduction with quick links.

  - 📝 **About Me:** Brief background and development passion.

  - 💻 **Skills:** Technical stack showcase.

  - 🖼️ **Projects:** Gallery of work with descriptions, tech tags, and links.

  - 🔗 **Socials:** "Link-in-bio" style section.

  - ✉️ **Contact:** Clean footer with contact info.

- 🎨 **Customizable:** Component-based structure allows easy updates.

- 🔍 **SEO Optimized:** Leveraging Next.js metadata API for better visibility.

## 🛠️ Tech Stack

- ⚡ **Framework:** [Next.js](https://nextjs.org/) (App Router)

- 📝 **Language:** [TypeScript](https://www.typescriptlang.org/)

- 🎨 **Styling:** [Tailwind CSS](https://tailwindcss.com/)

- 🛠️ **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

- ☁️ **Deployment:** [Vercel](https://vercel.com/)

## 🏁 Getting Started

### 📋 Prerequisites

- 🖥️ [Node.js](https://nodejs.org/en/) v18.17+

- 📦 [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### ⚡ Installation

```sh
git clone https://github.com/gitApurv/My-Portfolio.git
cd My-Portfolio
npm install # or yarn install
npm run dev # or yarn dev`
```

Visit <http://localhost:3000> to view the app.

## 🎨 Customization

1.  🧑‍💻 **Update Personal Info:**

    - `app/layout.tsx` -- site title & metadata

    - `components/Hero.tsx`, `About.tsx`, `Socials.tsx`, `Contact.tsx` -- personal info

2.  💡 **Add Skills:**

    - Update `skillsData` in `components/Skills.tsx`

3.  🖼️ **Showcase Projects:**

    - Add project images to `public/`

    - Update `projectsData` in `components/Projects.tsx`

4.  📄 **Update Resume:**

    - Place `resume.pdf` in `public/`

5.  🖼️ **Update Profile Picture:**

    - Place `profile.png` in `public/`

## 🚀 Deployment

Deploy easily with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) by connecting your GitHub repository. Vercel handles builds and deployment automatically.
