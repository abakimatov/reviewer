module.exports = {
  preset: 'jest-puppeteer',
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ['./src/setup-test.ts']
};
