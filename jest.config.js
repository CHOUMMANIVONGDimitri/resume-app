export default {
  testMatch: ["**/__tests__/**/*.test.(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["/node_modules/", "/src/assets/"],
  coveragePathIgnorePatterns: ["/node_modules/", "/src/assets/"],
  collectCoverage: true,
  coverageReporters: ["text", "cobertura"],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    }
  }
};
