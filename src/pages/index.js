import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { getAllPosts } from '../lib/posts'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import Bio from '../components/Bio'

export default function Home({ posts: defaultPost }) {

  const [posts, updatePosts] = useState(defaultPost)

  const postsSorted = posts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const { user, logIn, logOut } = useAuth()

  async function handleOnSubmit(data, e) {
    e.preventDefault()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
      method: 'POST',
      body: JSON.stringify(data)
    })

    const posts = await getAllPosts()
    updatePosts(posts)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {!user && <p><button onClick={logIn}>Log In</button></p>}
      {user && <p><button onClick={logOut}>Log Out</button></p>}

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/499248957059375104/5YV6IT8A_400x400.jpeg"
          name="Finabluma"
          tagline="Living on planet earth"
          role="Frontend developer"
        />

        <ul className={styles.posts}>
          {postsSorted.map(post => {
            const { content, id, date } = post;
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat('es-ES',
                    { dateStyle: 'short', timeStyle: 'short' })
                    .format(new Date(date))}
                />
              </li>
            )
          })}
        </ul>

        {user && <PostForm onSubmit={handleOnSubmit} />}

      </main>
    </div>
  )
}

export async function getStaticProps() {
  // const posts = await getAllPosts();

  return {
    props: {
      posts: []
    }
  }
}
