const VueConfig = require('eslint-config-alloy/vue');

// Extract property 'rules'
const { rules } = VueConfig;

module.exports = {
    extends: ['plugin:vue/vue3-recommended'],
    rules,
};
