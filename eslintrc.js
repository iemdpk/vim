module.exports = {
  root: true,
  extends: '@react-native-community',
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  semi: true,
  useTabs: false,
  // prettier-eslint doesn't currently support
  // inferring these two (Pull Requests welcome):
  parser: 'babylon',
  jsxBracketSameLine: false,
};
