import type { ComponentStoryObj, Meta } from "@storybook/react";
import type { ComponentProps } from "react";
import { Card } from ".";

type CardType = typeof Card;
type CardStory = ComponentStoryObj<CardType>;

const meta: Meta<ComponentProps<CardType>> = {
  component: Card,
  args: {
    articleId: '123',
    eyeCatchImg: "http://placehold.jp/3d4070/ffffff/150x150.png",
    publicationDate: "2018-07-07",
    viewPublicationDate: "2018/07/07",
    title: "title",
    description: "description",
  },
};

export default meta;

export const Default: CardStory = {
  args: {
    title: "【雀魂】脱初心者！最速雀豪昇段ガイド 2局目 初心から雀士へ",
    description:
      "【雀魂】じゃんたま脱初心者！最速雀豪昇段ガイド2局目 麻雀を初めたばかりの初心者が雀士へ昇段するために必要な技術について解説します。",
  },
};

export const Test: CardStory = {
  args: {
    title:
      "有名な広告詐欺ゲー「ガーデンスケイプ」をやってみたら意外と面白かった件",
    description:
      "普段ゲームをほとんどやらない僕が、Web広告でよく見る、有名な詐欺ゲー「ガーデンスケイプ」が実際のところどんなゲームなのか、本当に広告詐欺ゲーなのかなど実際にプレーして検証してみました。どうせつまらんクソゲーですぐに飽きるだろうと予想しながら始めたガーデンスケイプでしたが予想外の結果に！",
  },
};
