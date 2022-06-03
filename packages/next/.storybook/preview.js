// media query 等でのレスポンシブもテストしたい場合
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { withScreenshot } from "storycap";

export const decorators = [withScreenshot];

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: "^(?:handle|on)[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
