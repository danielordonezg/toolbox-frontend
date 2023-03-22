module.exports = {
  // other config options
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@babel/runtime)",
    "<rootDir>/node_modules/",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.jsx",
    "!<rootDir>/src/redux",
    "!<rootDir>/src/reportWebVitals",
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
