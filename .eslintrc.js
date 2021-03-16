module.exports = {
  extends: './module-files/configs/.eslintrc.js',
  ignorePatterns: ['module-files'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
  },
};
