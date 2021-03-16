const baseConfig = require('./module-files/configs/lint-staged.config.js');

module.exports = {
  ...baseConfig,
  '*.{jsx,tsx,vue,js,ts}': ['eslint --cache --max-warnings 0 --fix'],
};
