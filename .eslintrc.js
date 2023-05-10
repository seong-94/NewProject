module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off", // HOF 배우고 warpAsync 함수로 해결할 예정
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/consistent-type-imports":"off",
    " @typescript-eslint/consistent-type-definitions": "off"
 }
};
