import Head from "next/head";
import Image from "next/image";

export default function home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <h1>Welcome to my Website</h1>
        <p>
          Hi, I'm Dongwook Kim, a computer science student. Welcome to my
          portfolio website.
        </p>
        <div>
          <Image
            src="/path-to-your-image.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <p>
          Here, you'll find details about my skills, experience, and projects
          I've worked on. Feel free to reach out if you're interested in working
          together.
        </p>
      </main>
    </div>
  );
}
