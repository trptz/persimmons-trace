import type { ComponentStoryObj, Meta } from "@storybook/react";
import type { ComponentProps } from "react";
import { CardList } from ".";

type CardListType = typeof CardList;
type CardListStory = ComponentStoryObj<CardListType>;

const meta: Meta<ComponentProps<CardListType>> = {
  component: CardList,
  args: {
    cards: Array(10).fill(0).map((_, index) => ({
      articleId: `123${index}`,
      eyeCatchImg: "http://placehold.jp/3d4070/ffffff/150x150.png",
      publicationDate: "2018-07-07",
      viewPublicationDate: "2018/07/07",
      title: "title",
      description: "description",
    })),
  },
};

export default meta;

export const Default: CardListStory = {};
