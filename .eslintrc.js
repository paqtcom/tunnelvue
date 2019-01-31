module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true
    },
    globals: {
        axios: false,
        Components: false,
        describe: false,
        expect: false,
        Helpers: false,
        it: false,
        jest: false,
        Lang: false,
        state: false,
        trans: false,
        trans_choice: false,
        Vue: false,
        MG: false
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: false,
                ignores: []
            }
        ],
        'no-console': 'warn',
        'no-cond-assign': 'error',
        'no-param-reassign': 'warn',
        'no-return-assign': 'error',
        'no-useless-escape': 'error',
        'vars-on-top': 'warn',
        camelcase: [
            'warn',
            {
                properties: 'never'
            }
        ],
        'line-comment-position': [
            'error',
            {
                position: 'above'
            }
        ],
        'linebreak-style': ['error', 'unix'],
        'max-depth': ['error', 10],
        'max-nested-callbacks': ['error', 10],
        'max-statements-per-line': [
            'warn',
            {
                max: 1
            }
        ],
        'new-cap': 'warn',
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'no-inline-comments': 'error',
        'no-ternary': 'warn',
        'no-undef': 'error',
        'no-underscore-dangle': 'warn',
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used'
            }
        ],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'spaced-comment': ['error', 'always'],
        'require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    FunctionExpression: true
                }
            }
        ],
        'valid-jsdoc': [
            'warn',
            {
                prefer: {
                    arg: 'param',
                    argument: 'param',
                    class: 'constructor',
                    return: 'return',
                    virtual: 'abstract'
                },
                preferType: {
                    Boolean: 'boolean',
                    Number: 'number',
                    Object: 'object',
                    String: 'string'
                },
                requireReturn: false,
                matchDescription: '.+',
                requireParamDescription: false,
                requireReturnDescription: false
            }
        ],
        'prettier/prettier': ['error']
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'vue/html-indent': ['error', 4]
            }
        }
    ]
};
