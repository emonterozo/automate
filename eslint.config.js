// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*", "icons/*"],
    plugins: {
      "react-native": require("eslint-plugin-react-native"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      "no-console": "error",
      "@typescript-eslint/no-shadow": "error",
      "react-native/no-unused-styles": "error",
      "react-native/no-inline-styles": "error",
    },
  },
]);
