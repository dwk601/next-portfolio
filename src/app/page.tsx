import Head from "next/head";
import Navbar from "@/components/navbar";

export default function home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my portfolio</h1>
      </main>

      <footer>
        <p>© 2022 My Portfolio</p>
      </footer>
    </div>
  );
}
