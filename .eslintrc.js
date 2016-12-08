/**
 * ESLint rules by which to lint the JavaScript files.
 * http://eslint.org/docs/rules/
 */

module.exports = {
  "extends": [
    "eslint:recommended"
  ],
  "plugins": [
    "import"
  ],
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "impliedStrict": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    // Possible Errors
    "no-console": "off",

    // Best Practices
    "default-case": "off",
    "no-empty-function": "error",
    "vars-on-top": "warn",
    "wrap-iife": ["error", "outside"],

    // Strict Mode
    "strict": "off",

    // Variables
    "no-use-before-define": ["error", {"functions": false, "classes": true}],

    // Node.js and CommonJS
    "global-require": "off",
    "handle-callback-err": "warn",

    // Stylistic Issues
    "comma-dangle": ["warn", "always"],
    "eol-last": "off",
    "func-names": "off",
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "max-depth": ["warn", 6],
    "max-len": "off",
    "newline-before-return": "off",
    "no-bitwise": "off",
    "no-mixed-operators": "off",
    "no-plusplus": "off",
    "quotes": ["warn", "single"],

    // ECMAScript 6
    "arrow-body-style": ["warn", "always"],
    "arrow-parens": ["warn", "always"],
    "arrow-spacing": "warn",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "warn",
    //"object-shorthand": ["warn", "never"],

    // Deviations from our baseline coding standards
    "object-curly-spacing": ["warn", "never"],
    "no-underscore-dangle": ["warn", {"allow": ["_id", "_deleted", "_rev", "_args"]}], // Required by Cloudant and dashdash
    "linebreak-style": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-else-return": "off",

    // Temporary deviations until we can fix all these problems
    "valid-jsdoc": "off",

    // React and JSX
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  }
};
