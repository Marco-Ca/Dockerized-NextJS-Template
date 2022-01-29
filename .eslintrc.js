module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
  ],
  parser: '@babel/eslint-parser', // Default to js/jsx
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    // Make sure ESLint resolves both JS and TS files correctly
    // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'no-param-reassign': [2, {
      props: false,
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
    // Ignore file extensions since we have JS and TS
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  globals: {
    Waypoint: true,
    gtag: true,
    googletag: true,
    pbjs: true,
  },
  overrides: [
    // Typescript settings
    {
      files: ['**/*.{ts,tsx}'],

      // Global ESLint Settings
      // =================================
      env: {
        es6: true,
        node: true,
        browser: true,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },

      // Parser Settings
      // =================================
      // allow ESLint to understand TypeScript syntax
      // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js#L10
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module', // Allows for the use of imports
        project: './tsconfig.json', // Required for rule generation
      },

      // Plugins
      // =================================
      plugins: ['@typescript-eslint', 'react'],

      // Extend Other Configs
      // =================================
      extends: [
        'airbnb-typescript',
      ],
      rules: {
        'react/prop-types': 'off', // No need since we use TS
        'react/require-default-props': 'off', // Since we do not use prop-types
        'no-console': 'off', // Console.log is allowed for log collection
      },
    },

    // CDK settings
    {
      files: ['.aws/cdk/**/*'],
      rules: {
        'no-new': 'off', // CDK uses new as design pattern
      },
    },
    // Disable prop spreading for Storybook stories since actions addon needs it
    // Disable no-extraneous-dependencies for Storybook stories
    {
      files: ['**/*/*.stories.[jt]s?(x)'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
