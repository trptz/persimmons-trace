import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Hoge = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: grid;
  width: 50px;
`;

const Home: NextPage = ({ articles }: any) => {
  console.log({ articles });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hoge />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
// pages/article/[articleId].tsx
// pages/articles/[articleId]/index.tsx
export async function getStaticProps() {
  const articles = await fetch('http://localhost:1337/articles').then(res => res.json())
  return {
    props: {
      articles
    }, // ページコンポーネントにpropsとして渡されます。
  };
}
