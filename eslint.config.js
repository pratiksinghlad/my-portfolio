export default [
  {
    ignores: ["dist", "build", "node_modules"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
