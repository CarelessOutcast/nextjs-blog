import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout.js';
import Date from '../components/date.js';
import { getSortedPostsData } from '../lib/posts.js';
import utilStyles from '../styles/utils.module.css';

// getStaticProps will never run client side
// You can do direct queries to database
export async function getStaticProps(){

  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( {allPostsData} ) {
  return (
    <Layout home>
    <Head>{siteTitle}</Head>
    <section className={utilStyles.headingMd}>
    <p>Welcome,</p>
    <br/>
    <p>
      Hi, I'm Carlos. I've wanted to create a simple blog to start posting some
    of my findings and as another project that I could build for my github. I
    decided that I would pick nextjs because it's easy and fast to build. I
    don't want to worry too much about all the small details and I want to create a
    production ready application. 
    </p>
    <br/>
    <p>
      I'm going to be growing this more as I get more comfortable with NextJs
    but for the time being, I'm just going to use this!
    </p>
    </section>

    <section className={`${ utilStyles.headingMd } ${ utilStyles.padding1px }`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
      { 
        allPostsData.map(( { id, title, date } ) => (
          <li className={utilStyles.listItem} key={id}> 
          <Link href={`/posts/${id}`}>{title}</Link> 
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date}/>
          </small>
          <br />
          </li>
          ))
      }
      </ul>
    </section>
    </Layout>

  )
}
