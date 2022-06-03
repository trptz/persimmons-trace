import { VFC } from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { CardListProps } from "./types";

export const CardList: VFC<CardListProps> = ({ cards }) => {
  return (
    <Wrapper>
      <Grid>
        {cards.map((card) => (
          <Card key={card.articleId} {...card} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
