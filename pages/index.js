import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

export async function getStaticProps() {
  const foodsData = await (
    await axios.get("http://localhost:1337/api/foods")
  ).data.data;

  console.log(foodsData);

  return {
    props: {
      foods: foodsData,
    },
  };
}

export default function Home({ foods }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Shopping</h1>
        <div className={styles.grid}>
          {foods.map((food, index) => (
            <>
              <a
                href="https://nextjs.org/docs"
                className={styles.card}
                key={index}
              >
                <h2>{food.attributes.title}</h2>
                <p>{food.attributes.description}</p>
                <div>価格：{food.attributes.price}</div>
              </a>
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
