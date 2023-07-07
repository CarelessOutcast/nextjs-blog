
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Carlos Tapia';
export const siteTitle = 'Cylum.site'

export default function Layout({children, home}){
  return (
    <div className={styles.container}>
      <Head>
      <title>{siteTitle}</title>
      <meta 
      name='desciption' 
      content='Carlos personal Blog'
      />
      <meta name="og:title" content={siteTitle}/>
      <meta name="twitter:card" content="summary_large_image"/>
      </Head>
    <header className={styles.header}>
    {home ? (<>
      <Image priority src="./nextjs-blog/public/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt="" />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </>) : (<>
        <Link href="/"> <Image priority src="./nextjs-blog/public/images/profile.jpg" className={utilStyles.borderCircle} height={108} width={108} alt="" /> </Link>
        <h2>
        <Link href="/" className="utilStyles.colorInherit"> {name}
        </Link>
        </h2>
        </>)}
    </header>
      <main>
      {children} 
      </main>
    {!home && (
      <div className={styles.backToHome}>
      <Link href="/"> Back to home </Link>
      </div>
    )}
    </div>
  );
}
