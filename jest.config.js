module.exports = {
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.svg": "<rootDir>/src/__mocks__/svg.ts",
  },
  testTimeout: 10000,
};
