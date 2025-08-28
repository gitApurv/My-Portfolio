# Apurv Maurya - Developer Portfolio

This is the source code for my personal developer portfolio, built with **Next.js**, **TypeScript**, and styled with **Tailwind CSS**. The site is a modern, fully responsive single-page application designed to showcase my skills, projects, and professional background.

[**Live Preview**](https://my-portfolio-eight-theta-70.vercel.app/)) 


## ✨ Features

- **Modern Tech Stack:** Built with the latest Next.js App Router for optimal performance and developer experience.
- **Type-Safe Code:** TypeScript is used throughout the project for robust, maintainable, and error-free code.
- **Responsive Design:** Styled with Tailwind CSS for a mobile-first design that looks great on all devices, from phones to desktops.
- **Dynamic Sections:** Includes dedicated components for:
  - **Hero:** A welcoming introduction with quick links.
  - **About Me:** A brief summary of my background and passion for development.
  - **Skills:** A showcase of my technical stack.
  - **Projects:** A gallery of my best work with descriptions, tech tags, and links.
  - **Socials:** A "link-in-bio" style section for easy connectivity.
  - **Contact:** A clean footer with my contact information.
- **Easy to Customize:** Content is organized into separate components, making it simple to update and personalize.
- **Optimized for SEO:** Uses Next.js metadata API for better search engine visibility.


## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)



## 🛠️ Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.17 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/gitApurv/My-Portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd My-Portfolio
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```

Open http://localhost:3000 with your browser to see the result.


## 🎨 Customization

This portfolio is designed to be easily customized. To add your own information, follow these steps:

1.  **Update Personal Info:**
    - Open `app/layout.tsx` to change the site title and metadata.
    - Open `components/Hero.tsx`, `components/About.tsx`, and `components/Contact.tsx` to update your name, bio, email, and social links.

2.  **Add Your Skills:**
    - Modify the `skillsData` array in `components/Skills.tsx` to reflect your technical stack.

3.  **Showcase Your Projects:**
    - Add your project images to the `public/` folder.
    - Update the `projectsData` array in `components/Projects.tsx` with your project details, including titles, descriptions, images, and links.

4.  **Update Your Resume:**
    - Place your resume file in the `public/` folder and name it `resume.pdf`. The Resume button in the Hero section will automatically link to it.


## 🚀 Deployment

The easiest way to deploy this Next.js application is by using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the makers of Next.js.

Simply connect your GitHub repository to Vercel, and it will handle the build and deployment process automatically.


## 📬 Contact

Apurv Maurya

-   **Email:** [apurvmaurya5@gmail.com](mailto:apurvmaurya5@gmail.com)
-   **LinkedIn:** [linkedin.com/in/apuvrmaurya](https://www.linkedin.com/in/apurvmaurya)
-   **GitHub:** [@gitApurv](https://github.com/gitApurv)

