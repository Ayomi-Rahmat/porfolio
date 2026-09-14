# porfolio/site

This folder contains the React + Tailwind scaffold for your portfolio.

How to view locally (quick):

1. Checkout the branch created for the revamp:
   git fetch origin
   git checkout revamp/react-tailwind

2. Enter the site directory and install dependencies:
   cd site
   npm install

3. Run the dev server:
   npm run dev

4. Open the URL printed by Vite (usually http://localhost:5173)

Deployment recommendations:
- Vercel: recommended for automatic preview URLs from branches and easy production deployments.
- GitHub Pages: works too; you'd build and publish the `site/dist` output.

Notes:
- The project references your existing root `images/` assets if you want to reuse them; you can also move images into `site/src/assets` and import them.
- Replace `your-email@example.com` with your real contact email in `site/src/components/Navbar.jsx` and `site/src/components/Contact.jsx`.
