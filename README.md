# My Portfolio 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=yellow)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

## What is this?

my portfolio is designed to showcase my career history, skill sets, and more.

View the [Demo](https://pratiksinghlad.github.io/my-portfolio/).

**This portfolio code is free to use, and no attribution is required.** You can fork or download this repository to customize it for your own use. Please don't forget to leave a ⭐ if you like this portfolio!

![screenshot](/public/images/screenshot.jpg)

## Features

✅ Open source (free to use, no attribution required)  
✅ Built with Vite for lightning-fast development  
✅ Responsive design & mobile-friendly  
✅ Modern development setup with ESLint and Prettier  
✅ Supports both dark and light modes  
✅ Highly customizable multi-component layout  
✅ Built with modern technologies (React, TypeScript, SCSS)  
✅ Automatic code formatting and linting on save

## Quick Setup

1. Ensure you have [Node.js](https://nodejs.org/) installed (version 16 or higher). Check your installation by running:

   ```bash
   node -v
   ```

2. In the project directory, install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

5. Customize the template by navigating to the `/src/components` directory. Modify texts, pictures, and other information as needed.

The page will automatically reload when you make changes. ESLint and Prettier will automatically format your code on save.

## Deployment

You can choose your preferred service (e.g., [Netlify](https://www.netlify.com/), [Render](https://render.com/), [Heroku](https://www.heroku.com/)) for deployment. One of the easiest ways to host this portfolio is using GitHub Pages. Follow the instructions below for a production deploy.

1. **Set Up GitHub Repository**

   Create a new repository on GitHub for your portfolio app.

2. **Configure `package.json`**

   Edit the following properties in your `package.json` file: ```json
   {
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
   "start": "vite",
   "build": "tsc && vite build",
   "preview": "vite preview",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   }
   }

   ```

   Replace `yourusername` with your GitHub username and `your-repo-name` with the name of your GitHub repository.

   ```

3. **Deploy to GitHub Pages**

   Run the following command to deploy your app:

   ```bash
   npm run deploy
   ```

4. **Access Your Deployed App**

   After successfully deploying, you can access your app at `https://yourusername.github.io/your-repo-name`.

## Code Quality and Development Tools

This project uses modern development tools to ensure code quality and developer productivity:

### ESLint and Prettier

The project is configured with ESLint and Prettier for consistent code style and quality:

- **ESLint**: Catches programming errors and enforces code style
- **Prettier**: Automatically formats code on save
- **VS Code Integration**: Works out of the box with VS Code
- **Pre-configured Rules**: Optimized for React and TypeScript

### Development Server

The project uses Vite as the development server, offering:

### VS Code Configuration

The repository includes optimized VS Code settings for:

- Automatic code formatting on save
- ESLint error highlighting
- TypeScript integration
- Recommended extensions

You don't need to configure anything - it works out of the box!
