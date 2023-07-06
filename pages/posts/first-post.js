import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost(){
  return (
  <Layout post>
    <Head>
      <title> First Post </title>
    </Head>
    <h1 className="title"> First post </h1>
    <p> This is the very first post that I've created! </p>
  </Layout>
  );
}
