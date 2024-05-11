# React with TypeScript enabled

This repository provides a simple setup for developing React applications with TypeScript using Vite as the build tool. It includes Hot Module Replacement (HMR) for fast development.

## Getting Started

Follow these steps to clone and run the project:

1. **Clone the repository**:

   ```
   git clone https://github.com/ERMIASWAKGARI/Week-long-ReactJS-challenges.git
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```
   THE YOU CAN SEE THE CHALLENGES LIVE ON THE BROWSER, GOING TO: http://localhost:5173/

## Additional Information

- This project uses [Vite](https://vitejs.dev/) as the build tool, providing fast and optimized development experience.
- TypeScript is enabled to ensure type safety and improve code quality.
- The ESLint configuration is set up to enforce code quality and best practices. Make sure to expand the ESLint configuration as needed for your project.

### Expanding the ESLint configuration

To further enhance your ESLint configuration, consider the following steps:

1. **Configure parser options**:  
   Update the `parserOptions` property in `.eslintrc.js` to enable type-aware lint rules. Example configuration:

   ```javascript
   parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module',
     project: ['./tsconfig.json', './tsconfig.node.json'],
     tsconfigRootDir: __dirname,
   }
   ```

2. **Update TypeScript ESLint rules**:  
   Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`. Optionally, you can add `plugin:@typescript-eslint/stylistic-type-checked` for additional stylistic rules.

3. **Install and configure ESLint React plugin**:  
   If you're developing React applications, install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list in `.eslintrc.js`.

Feel free to customize the ESLint configuration further according to your project requirements.

Happy coding! 🚀
