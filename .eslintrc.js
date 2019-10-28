const path = require('path')

module.exports = {
  "globals": {
    "Promise": true,
    "document": true,
    "require": true,
    "Intl": true,
    "Map": true,
    "module": true,
    "process": true,
    "console": true,
    "window": true,
    "global": true
  },
  "extends": [
    "plugin:import/errors", // See https://github.com/benmosher/eslint-plugin-import
    "plugin:import/warnings",
    "plugin:react/recommended", // See https://github.com/yannickcr/eslint-plugin-react
    "prettier", // See https://github.com/prettier/eslint-plugin-prettier
    "prettier/react" // prettier config should always be last in the list
  ],
  "plugins": [
    "react",
    "import",
    "prettier",
    "react-hooks"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '.')],
      },
    },
    react: {
      version: "^16.8.0",
    },
  },
  "rules": {
    // general
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "no-dupe-keys": "warn",
    "object-shorthand": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-use-before-define": "warn",

    // hooks
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn' ,

    // import
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ],
    "import/newline-after-import": "warn",
    "import/no-anonymous-default-export": "warn",
    "import/no-default-export": "error",


    // react
    "react/jsx-filename-extension": "off",
    "react/boolean-prop-naming": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/self-closing-comp": "warn",

    // prettier
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "semi": false,
        "arrowParens": "always"
      }
    ]
  }
}