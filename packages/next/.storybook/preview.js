// media query 等でのレスポンシブもテストしたい場合
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Fragment } from "react";
import { withScreenshot } from "storycap";
import { GlobalStyle } from "../src/styles/globalStyle";

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

addDecorator((storyFn) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
));
