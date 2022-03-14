const TSConfig = require('eslint-config-alloy/typescript');

// Extract property 'plugins' and 'rules'
const { plugins, rules } = TSConfig;

// Omit unrelated rules
const { rules: { 'react/sort-comp': ignored, ...TSRules } } = rules;

module.exports = {
    plugins,
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: TSRules,
};
