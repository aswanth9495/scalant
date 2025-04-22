import standard from 'stylelint-config-standard-scss';
import scss from 'stylelint-scss';

/** @type {import('stylelint').Config} */
export default {
  extends: [standard],
  plugins: [scss],
  ignoreFiles: ['node_modules/**', 'dist/**', 'theme'],
  rules: {
    'selector-class-pattern': null,
    'no-empty-source': null,
    'rule-empty-line-before': 'always-multi-line',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
  },
};
