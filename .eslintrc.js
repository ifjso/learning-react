module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "plugins": ["react"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "quotes": [
            "off",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "off",
            { "allow": ["warn", "error"] }
        ],
        "no-constant-condition": [
            "error",
            { "checkLoops": false }
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};
