module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/svg-transform.js',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  setupFiles: ['jest-date-mock', '<rootDir>/src/setupTests.ts'],
}
