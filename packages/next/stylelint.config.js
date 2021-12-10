const properties = require("known-css-properties").all;

module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: [
    "stylelint-prettier",
    "stylelint-order",
    "stylelint-no-unsupported-browser-features",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
  ],
  rules: {
    "prettier/prettier": true,
    "order/properties-order": properties,
    "value-keyword-case": ["lower", { ignoreKeywords: ["dummyValue"] }],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["/-styled-mixin/", "$dummyValue"],
      },
    ],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["box-orient"],
      },
    ],
    "value-no-vendor-prefix": [
      true,
      {
        ignoreValues: ["box"],
      },
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        browsers: ["> 1%", "Last 2 versions"],
        ignore: ["rem"],
        ignorePartialSupport: true,
      },
    ],
    "plugin/declaration-block-no-ignored-properties": true,
  },
};
