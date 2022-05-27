import { VFC } from "react";
import styled from "styled-components";
import { Colors } from "../../shared/const/colors";
import { CardProps } from "./types";

export const Card: VFC<CardProps> = (props) => {
  return (
    <Wrapper>
      <FlexRow>
        <EyeCatchImg src="http://placehold.jp/3d4070/ffffff/150x150.png" />
      </FlexRow>
      <PublicationDate dateTime="2018/07/07" />
      <ArticleTitle>
        【雀魂】脱初心者！最速雀豪昇段ガイド 2局目 初心から雀士へ
      </ArticleTitle>
      <ArticleDescription>
        【雀魂】じゃんたま脱初心者！最速雀豪昇段ガイド2局目
        麻雀を初めたばかりの初心者が雀士へ昇段するために必要な技術について解説します。
      </ArticleDescription>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`;

const EyeCatchImg = styled.img`
  width: 150px;
  height: 150px;
`;

const PublicationDate = styled.time`
  font-size: 12px;
  color: ${Colors.COLOR_5c6069};
`;

const ArticleTitle = styled.h2`
  font-size: 20px;
  color: ${Colors.COLOR_333333};
`;

const ArticleDescription = styled.p`
  font-size: 12px;
  color: ${Colors.COLOR_5c6069};
`;
