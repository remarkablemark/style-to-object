/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  modulePathIgnorePatterns: ['fixtures', 'types'],
  testEnvironment: 'node'
};

module.exports = config;
