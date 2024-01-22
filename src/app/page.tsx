import Head from 'next/head'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my portfolio</h1>

        <section>
          <h2>About Me</h2>
          <p>...</p>
        </section>

        <section>
          <h2>My Skills</h2>
          <p>...</p>
        </section>

        <section>
          <h2>My Projects</h2>
          <p>...</p>
        </section>

        <section>
          <h2>Contact Me</h2>
          <p>...</p>
        </section>
      </main>

      <footer>
        <p>© 2022 My Portfolio</p>
      </footer>
    </div>
  )
}