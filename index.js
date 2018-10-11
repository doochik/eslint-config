module.exports = {
    "extends": [
        "eslint:recommended",
    ],
    "rules": {
        "array-bracket-spacing": ["error", "always"],
        "arrow-parens": ["error", "always"],
        "brace-style": "error",
        "camelcase": ["error", {
            "properties": "never"
        }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error"],
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
        "lines-between-class-members": ["error", "always"],
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
        "no-useless-constructor": "error",
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
    }
};
