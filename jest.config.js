module.exports = {
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ['./src/setup-test.ts']
};
