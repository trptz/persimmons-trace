import { StoryObj } from "@storybook/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./index";

export default {
  component: Checkbox,
};

export const Default: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "iphonex", // storybook で定義されている値
    },
    screenshot: {
      viewport: "iPhone X", // storycap (storybook からキャプチャを取得するパッケージ) の中にある puppeteer で定義されている値
    },
  },
};

export const Checked = {
  play: async () => {
    await userEvent.click(screen.getByText("Check!!!"));
  },
};
