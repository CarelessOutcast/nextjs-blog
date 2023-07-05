import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
    <Head>{siteTitle}</Head>
    <section className={utilStyles.headingMd}>
    <p>Welcome to Cylum</p>
    <p>
      Hi, I'm Carlos. I've wanted to create a simple blog to start posting some
    of my findings and as another project that I could build for my github. I
    decided that I would pick nextjs because it's easy and fast to build. I
    don't want to worry too much about all the small details and I want to create a
    production ready application. 
    </p>
    <p>
      I'm going to be growing this more as I get more comfortable with NextJs
    but for the time being, I'm just going to use this!
    </p>
    </section>
    </Layout>

  )
}
