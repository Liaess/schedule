const nextJest = require("next/jest");
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/jest.config.js",
    "<rootDir>/jest-setup.ts",
    "<rootDir>/.next/",
    "<rootDir>/*.d.ts/",
    "<rootDir>/next.config.js",
    "<rootDir>/postcss.config.js",
    "<rootDir>/tailwind.config.ts",
    "<rootDir>/src/app/libs/",
    "<rootDir>/src/app/constants/",
  ],
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(config);
