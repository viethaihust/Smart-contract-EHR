import culurConfigPrettier from "@culur/prettier-config";

export default {
  ...culurConfigPrettier,
  tabWidth: 2,
  plugins: ["prettier-plugin-solidity"],
  overrides: [
    ...culurConfigPrettier.overrides, //
    {
      files: "*.sol",
      options: {
        parser: "solidity-parse",
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
      },
    },
  ],
};
