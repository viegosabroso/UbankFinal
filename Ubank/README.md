Application’s purpose: The purpose of UBank is to help young university students who are facing financial independence for the first time, by managing their expenses more responsibly and preventing small expenses from accumulating and becoming a financial problem.

Libraries

Recharts
Recharts is a charting library for React that allows you to easily create interactive and customizable charts. It is component-based and very flexible, making it easy to build complex charts with simple code. The types of charts that can be generated include line charts, bar charts, area charts, pie charts, and scatter plots, among others. Recharts stands out for its integration with React and its focus on component reusability.

EmailJS  
EmailJS allows you to send emails directly from web applications using JavaScript, without the need for a backend. It utilizes third-party email services (like Gmail, Outlook, etc.) to process and send emails.

React Hot Toast 
React Hot Toast is a lightweight, customizable library for displaying toast notifications in React applications. It provides a simple API to show messages like success, error, or info alerts that disappear automatically after a set time.

Code of Conduct

We will use Conventional Commits to maintain a clear and understandable commit history. Commit messages must follow this format:


type: short description


Allowed commit types:
- feat: Used to add a new feature.
- fix: Used to fix a bug.
- docs: For changes to documentation.
- style: Changes related to formatting, without affecting functionality (spaces, commas, etc.).
- refactor: Changes that improve code without fixing bugs or adding features.
- file: changes on scaffolding or adding a new file

All commits, code, and documentation must be in English  
Each time a question or problem arises in the code, it must be documented so the team can solve it together.

WorkFlow

In this project, we will be using git-flow to organize our work, which will be divided into three branches: Main, Develop, and Feature.
Main Branch:
This branch contains all the stable, production-ready code.
Only big, finalized updates (such as major releases) will be merged here.
This ensures that the Main branch is always deployable.
Maximum 4 commits in this branch.
Develop Branch:
The Develop branch is where all the development happens before it's ready for the Main branch.
It serves as the integration branch for features and ensures all new features or updates are properly tested and stable before being merged into Main.
Think of this branch as the working version of the next release.
Feature Branches:
Feature branches are created off Develop to work on specific features or bug fixes.
Each new feature gets its own branch and is named descriptively 
Once the feature is complete and tested, it will be merged back into the Develop branch.
By doing this we ensure that the project is organized and easy to understand for everyone in the team.
Each version of the project will be managed with semantic versioning (e.g., v0.0.1). This means that every time a change is made in the project, the version number will be updated according to the following rules:
Feature Version (v0.0.X):
Every time a change is made in the Feature branch, the last number (patch) will be incremented.
For example, if a new feature or bug fix is added, the version changes from v.0.0.2 to v0.03
Minor Version (v0.X.0):
When significant changes are merged into the Develop branch, the middle number (minor) will be incremented.
This signifies that new functionality has been added that’s not necessarily backward-compatible or includes more than small fixes.
For example, after several features are merged and tested, the version might change from v0.1.0 to v0.2.0.
Major Version (vX.0.0):
The first number (major) will be incremented when a release is made into the Main branch. This signifies that the project has undergone a significant update or breaking changes.
For example, once the project is stable and ready for a major release, the version will change from v1.0.0 to v2.0.0.
By doing this the tracking of each version is clear and understandable for every participant. 


Summary of Project Progress (30%)
Functionality: Financial Recommendations Form
Description:
For this 30% of theUbank Project, we focused on the "Financial Recommendations Form." Here is an overview of the work completed:
User Registration and Database Integration: We successfully implemented a user registration system, which stores user information in a database.
Form Functionality: We developed the financial recommendations form, which consists of 6 questions. Based on the user's responses, the form generates a specific financial plan tailored to their needs.
Screens Developed: We successfully programmed the Login and Register screens, focusing primarily on the functionality of the Form screen. The form is connected to Firebase and generates a plan according to the user's responses.
Styles and Responsiveness: The CSS for these screens has been completed, ensuring that the screens are fully responsive for both desktop and mobile devices, specifically optimized for the iPhone 14 Pro Max.


------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
