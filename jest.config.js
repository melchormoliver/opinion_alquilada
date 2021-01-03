module.exports = {
  rootDir: `${__dirname}`,
  verbose: true,
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/serviceWorker.ts',
    '!src/index.tsx',
    '!src/**/*.d.ts',
  ],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
};
