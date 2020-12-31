module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'settings': {
      'react': {
        'version': 'detect'
      }
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'react/react-in-jsx-scope': 'off'
    }
}
