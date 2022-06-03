module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  features: { previewCsfV3: true },
  addons: [
    "storycap",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
    "storybook-addon-pseudo-states",
  ],
};
