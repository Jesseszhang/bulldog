// http://eslint.org/docs/user-guide/configuring
module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'extends': 'standard',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },

  'env': {
    'browser': true,
    'node': true
  },

  'plugins': [
   'html'
  ],

  // add your custom rules here
  // "off" -> 0
  // "warn" -> 1
  // "error" -> 2
  'rules': {
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'array-bracket-spacing': [2, "always"],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { "before": false, "after": true }],
    "eqeqeq": [2, "allow-null"],
  }
}