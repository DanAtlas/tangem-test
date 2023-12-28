import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderBanner from '../components/header-banner/HeaderBanner';
import CardBanner from 'components/card-banner/CardBanner';
import styles from './homepage.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tangem-test</title>
        <meta name="description" content="Tangem-test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles['homepage']}>
        <HeaderBanner />
        <CardBanner />
      </main>
    </div>
  )
}

export default Home;
