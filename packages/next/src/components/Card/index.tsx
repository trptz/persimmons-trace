import Link from "next/link";
import { VFC } from "react";
import styled from "styled-components";
import { Colors } from "../../shared/const/colors";
import { CardProps } from "./types";

export const Card: VFC<CardProps> = ({
  articleId,
  eyeCatchImg,
  publicationDate,
  viewPublicationDate,
  title,
  description,
}) => {
  return (
    <Link href={`/article/${articleId}`}>
      <Wrapper>
        <FlexRow>
          <EyeCatchImg src={eyeCatchImg} />
        </FlexRow>
        <PublicationDate dateTime={publicationDate}>
          {viewPublicationDate}
        </PublicationDate>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  display: block;
  cursor: pointer;
  padding: 15px;

  transition: box-shadow 0.3s, transform 0.3s;
  :hover {
    box-shadow: 0 0 10px 3px #e0e4e4;
    transform: translateY(-2px);
  }
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
