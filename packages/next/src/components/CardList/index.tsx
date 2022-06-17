import { VFC } from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { CardListProps } from "./types";

export const CardList: VFC<CardListProps> = ({ cards }) => {
  return (
    <Wrapper>
      <Grid>
        {cards.map((card) => (
          <li key={card.articleId}>
            <Card {...card} />
          </li>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
