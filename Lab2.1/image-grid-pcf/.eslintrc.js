module.exports = {
  env: {
      browser: true,
      es2020: true
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended'
  ],
  globals: {
      ComponentFramework: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
  },
  plugins: [
      '@typescript-eslint'
  ],
  ignorePatterns: ["**/generated/*.ts"],
  rules: {
      'no-unused-vars': ['warn'],
      'no-undef': ['warn']
  },
  settings: {
      react: {
          version: 'detect'
      }
  }
};
