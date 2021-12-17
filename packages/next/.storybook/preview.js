// media query 等でのレスポンシブもテストしたい場合
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { withScreenshot } from "storycap";

export const decorators = [
  withScreenshot,
]

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
