const TSConfig = require('eslint-config-alloy/typescript');

// Extract property 'plugins' and 'rules'
const { plugins, rules } = TSConfig;

module.exports = {
    plugins,
    rules,
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
};
