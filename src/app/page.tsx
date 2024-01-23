import Head from "next/head";

export default function home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <h2 className="title">Welcome to my Website!</h2>
        <p className="intro">Hi, I'm Dongwook Kim.</p>
        <p className="description">
          As a student, I'm continuously exploring and learning cutting-edge
          technologies. I'm passionate about creating innovative solutions and
          eager to tackle challenging problems.
        </p>
        <p className="techStack">
          My main tech stacks are:
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            // Add more as needed
          </ul>
        </p>
      </main>
    </div>
  );
}
