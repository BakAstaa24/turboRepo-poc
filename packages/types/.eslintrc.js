module.exports = {
    root: true,
    extend : ["@repo/eslint-config/library.js"],
    parser : "@typescript-eslint/parser",
    parserOptions: {
       tsconfigRootDir: __dirname,
    },
};