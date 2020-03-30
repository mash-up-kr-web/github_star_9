module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  /* use babel resolver setting */
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    /* React */
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',

    '@typescript-eslint/no-empty-interface': 'off',

    /* import file without extensions */
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

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/webpack.config.{ts,js}', '**/webpack.config.*.{ts,js}'],
        optionalDependencies: false,
      },
    ],
  },
};
