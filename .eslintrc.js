module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['airbnb'],
    plugins: ['babel', 'import', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'linebreak-style': 'off', // Неправильно работает в Windows.

        'arrow-parens': 'off', // Несовместимо с prettier
        'object-curly-newline': 'off', // Несовместимо с prettier
        'no-mixed-operators': 'off', // Несовместимо с prettier
        'arrow-body-style': 'off', // Это - не наш стиль?
        'function-paren-newline': 'off', // Несовместимо с prettier
        'no-plusplus': 'off',
        'space-before-function-paren': 0, // Несовместимо с prettier
        'no-case-declarations': 'off',
        'no-use-before-define': 'off',
        'max-len': ['error', 125, 2, { ignoreUrls: true }], // airbnb позволяет некоторые пограничные случаи
        'no-alert': 'error', // airbnb использует предупреждение

        'prefer-destructuring': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
    },
};
