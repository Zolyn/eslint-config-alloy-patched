# eslint-config-alloy-patched
Patch eslint-config-alloy to make it compatible with Vue + TS projects

## Installation
```bash
# ni
ni -D eslint-config-alloy-patched

# npm
npm install --save-dev eslint-config-alloy-patched

# yarn
yarn add -D eslint-config-alloy-patched

# pnpm
pnpm add -D eslint-config-alloy-patched
```

## Usage
```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: ['alloy-patched'], // equivalent to -> ['alloy-patched/base', 'alloy-patched/vue', 'alloy-patched/typescript']
  // ...
}
```

## License
[MIT](https://mit-license.org)
