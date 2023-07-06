import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout.js';

export default function about(){
  return (
    <Layout>
    <Head> 
    <title> About me </title>
    </Head>
    <h1> About me </h1>
    </Layout>
  );
}
