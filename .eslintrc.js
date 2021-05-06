module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-await-in-loop': 'warn',
    'no-console': 'warn',
    'no-loop-func': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0,
      maxBOF: 0,
    }],
    'no-magic-numbers': ['warn', {
      ignore: [
        // commonly used
        -1, 0, 1,
        // HTTP status codes
        // 1XX Informational Response
        100, 101, 102, 103,
        // 2XX Success
        200, 201, 202, 203, 204, 205, 206, 207, 208,
        218,
        226,
        // 3XX Redirection
        300, 301, 302, 303, 304, 305, 306, 307, 308,
        // 4XX Client Errors
        400, 401, 402, 403, 404, 405, 406, 407, 408, 409,
        410, 411, 412, 413, 414, 415, 416, 417, 418, 419,
        420, 421, 422, 423, 424, 425, 426, 428, 429,
        430, 431,
        440, 444, 449,
        450, 451,
        460, 463,
        494, 495, 496, 497, 498, 499,
        // 5XX Server Errors
        500, 501, 502, 503, 504, 505, 506, 507, 508, 509,
        510, 511,
        520, 521, 522, 523, 524, 525, 526, 527, 529,
        530,
        598,
      ],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      enforceConst: true,
    }],
    // For mongoose toJSON() method to remove certain fields from model
    'no-param-reassign': ['error', {
      ignorePropertyModificationsFor: ['ret'],
    }],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: true,
      exceptions: {
        Property: true,
      },
    }],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', {
      allowTernary: true,
    }],
    // using node --use_strict
    'strict': ['error', 'safe'],
    'require-await': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always', {
      objectsInObjects: false,
    }],
    'max-len': ['error', {
      // widths are standard terminal widths
      code: 80,
      comments: 132,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    // parentheses around argument list as-needed for arrow function parameters
    'arrow-parens': 'off',
    // Turn off to visually group imports with usage by newlines
    'import/newline-after-import': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    // NOTE: method should be static if not using this keyword
    'class-methods-use-this': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'eqeqeq': 'warn',
    'quote-props': ['warn', 'consistent-as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    // regex
    'prefer-named-capture-group': 'warn',
    'no-useless-escape': 'off',
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true,
    }],
    // TODO: re-enable afterwards
    // 'require-unicode-regexp': 'warn',
    // naming
    'camelcase': 'off',
    'new-cap': 'off',
    // indent
    'indent': ['error', 2, {
      FunctionDeclaration: {
        parameters: 'first',
      },
      FunctionExpression: {
        parameters: 'first',
      },
      ImportDeclaration: 'first',
      CallExpression: {
        arguments: 'first',
      },
      ArrayExpression: 'off',
      MemberExpression: 'off',
    }],
    'max-depth': ['error', {
      max: 4,
    }],
    'no-unused-vars': ['error', {
      args: 'none',
    }],
    'no-trailing-spaces': ['error', {
      ignoreComments: true,
    }],
    'no-case-declarations': 'off',
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'max-classes-per-file': 'off',
    'generator-star-spacing': ['error', {
      before: true,
      after: false,
    }],
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      modules: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          "src",
        ],
      },
    },
  },
};
