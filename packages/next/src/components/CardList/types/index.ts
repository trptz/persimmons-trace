import { ComponentProps } from "react";
import { Card } from "../../Card";

export type CardListProps = {
  cards: ComponentProps<typeof Card>[];
};
