module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "jsx-a11y/label-has-associated-control": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": 0,
    "react/prop-types": 0,
    "no-use-before-define": "off",
    "linebreak-style": 0,
    "no-unused-vars": "off",
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": ["error"],
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
