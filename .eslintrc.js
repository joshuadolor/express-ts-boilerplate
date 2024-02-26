module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true,
            },
            "files": [
                ".eslintrc.{js,cjs}",
            ],
            "parserOptions": {
                "sourceType": "script",
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "rules": {
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/comma-dangle": ["error", {
            "arrays": "always",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "quotes": [2, "single"],
    },
    "ignorePatterns": ['node_modules/', 'dist/', '.env'],
}
