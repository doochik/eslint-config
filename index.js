module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "jest",
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.4"
        }
    },
    "rules": {
        "array-bracket-spacing": ["error", "always"],
        "arrow-parens": ["error", "always"],
        "brace-style": "error",
        "camelcase": ["error", {
            "properties": "never"
        }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-style": ["error", "last"],
        "curly": ["error", "all"],
        "eol-last": "error",
        "eqeqeq": ["error", "allow-null"],
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true
        }],
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "lines-around-comment": ["error", {
            "beforeBlockComment": true,
            "allowBlockStart": true
        }],
        "max-len": ["error", 160, 4],
        "no-empty": [ 2, { "allowEmptyCatch": true } ],
        "no-implicit-coercion": ["error", {
            "number": true,
            "boolean": true,
            "string": true
        }],
        "no-mixed-operators": ["error", {
            "groups": [
                ["&&", "||"]
            ]
        }],
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-trailing-spaces": "error",
        "no-spaced-func": "error",
        "no-with": "error",
        "object-curly-spacing": ["error", "always"],
        "object-shorthand": "off",
        "one-var": ["error", "never"],
        "operator-linebreak": [ "error", "after" ],
        "prefer-const": "error",
        "quote-props": ["error", "as-needed", {
            "keywords": true,
            "numbers": true
        }],
        "quotes": ["error", "single", {
            "allowTemplateLiterals": true
        }],
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-before-blocks": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "off",
        "template-curly-spacing": ["error", "always"],
        "valid-jsdoc": ["error", {
            "requireParamDescription": false,
            "requireReturnDescription": false,
            "requireReturn": false,
            "prefer": {
                "return": "returns"
            }
        }],
        "wrap-iife": ["error", "inside"],
        "yoda": ["error", "never"],

        "jest/no-disabled-tests": "error",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-to-be-undefined": "error",
        "jest/valid-expect": "error",

        "react/jsx-key": "error",
        "react/jsx-no-bind": ["error", {
            "ignoreRefs": true
        }],
        "react/jsx-curly-brace-presence": ["error", {
            "props": "never",
            "children": "never"
        }],
        "react/jsx-curly-spacing": ["error", {
            "when": "always",
            "children": true,
            "spacing": {
                "objectLiterals": "never"
            }
        }],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-no-duplicate-props":  "error",
        "react/jsx-tag-spacing": ["error", {
            "afterOpening": "never",
            "beforeSelfClosing": "never",
            "closingSlash": "never"
        }],
        "react/jsx-wrap-multilines": ["error", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }],
        "react/no-deprecated": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "error",
        "react/no-string-refs": "error",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": "error",
        "react/no-unused-state": "error",
        "react/prop-types": ["error", {
            "ignore": [
                "children",
            ]
        }],
        "react/void-dom-elements-no-children": "error"
    }
};
