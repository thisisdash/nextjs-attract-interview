import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Let's build something fun!!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Let's build something fun!</h1>

        <p className={styles.description}>
          Please use the <a href='https://api.nasa.gov/'>NASA Open API</a> to
          fetch some data and render it on a page.
        </p>
        <p>
          For example, images from Mars Rover Photos. You don't need a special
          key, you can just use
          <code className={styles.code}>api_key=DEMO_KEY</code>.
        </p>
        <p>
          Implement this in whatever way you want! Feel free to ask questions
          and talk us through what you are doing.
        </p>
      </main>
    </div>
  );
}
