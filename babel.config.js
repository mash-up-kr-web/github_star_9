module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react', ['@babel/preset-env', { debug: true }]],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^~/(.+)': './src/\\1',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    'transform-inline-environment-variables',
  ],
};
