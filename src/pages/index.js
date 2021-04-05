import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import Bio from '../components/Bio'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/499248957059375104/5YV6IT8A_400x400.jpeg"
          name="Finabluma"
          tagline="Living on planet earth"
          role="Frontend developer"
        />

        <ul className={styles.posts}>
          <li>
            <Post content="Hola este contenido viene de post" date="3/04/2021" />
          </li>
          <li>
            <Post content="eira seats next to me!" date="01/04/2021" />
          </li>
          <li>
            <Post content="Hola mi amor, soy yo tu lobo?" date="20/03/2021" />
          </li>
        </ul>

        <PostForm />

      </main>
    </div>
  )
}
