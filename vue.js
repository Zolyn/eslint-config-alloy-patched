const VueConfig = require('eslint-config-alloy/vue');

// Extract property 'parser', 'plugins' and 'rules'
const { parser, plugins, rules } = VueConfig;

module.exports = {
    parser,
    plugins,
    rules,
};
