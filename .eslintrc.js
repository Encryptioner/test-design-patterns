module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    // https://www.darraghoriordan.com/2021/06/23/best-eight-8-eslint-plugins-nestjs-node-application/
    '@typescript-eslint/eslint-plugin',
    'import',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: ['*.js', '*.mjs', '*.d.ts', 'dist/*'],
  rules: {
    camelcase: 'error',
    indent: 'off',
    'no-useless-constructor': 'off',
    'no-restricted-syntax': 'warn',
    'no-use-before-define': 'error',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'error',
    'no-await-in-loop': 'off',
    'guard-for-in': 'warn',
    'no-continue': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-params': ['error', 4],
    'import/export': 0,
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'max-classes-per-file': 'off',
    'max-lines-per-function': [
      'warn',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'function-paren-newline': [
      'warn',
      {
        minItems: 2,
      },
    ],
    'object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'always',
      ExportDeclaration: {
        multiline: true, minProperties: 3,
      },
    }],
    'no-restricted-imports': ['error', {
      patterns: ['../*'],
    }],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
  },
};
