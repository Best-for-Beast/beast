module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
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
