module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
      'react',
      'flowtype'
    ],
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false
    }
  },
  'rules': {
    'flowtype/no-types-missing-file-annotation': 0
  }
};
