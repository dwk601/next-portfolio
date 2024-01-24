import Head from "next/head";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export default function home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <h2 className="title font-light text-muted-foreground">
          Welcome to my Website!
        </h2>
        <p className="intro">Hi, I'm Dongwook Kim.</p>
        <p className="description">
          As a student, I'm continuously exploring and learning cutting-edge
          technologies. I'm passionate about creating innovative solutions and
          eager to tackle challenging problems.
        </p>
        <div className="flex gap-2">
          <a
            target="_blank"
            href="https://github.com/dwk601"
            rel="noopener noreferrer"
            aria-label="Github"
            className="rounded p-3 text-xl hover:bg-accent hover:text-accent-foreground"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dwk1/"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded p-3 text-xl hover:bg-accent hover:text-accent-foreground"
          >
            <FaLinkedin />
          </a>
        </div>
        <Separator />
        <p className="techStack">
          My main tech stacks are
          <ul>
            <div className="dialog-container">
              <Dialog>
                <DialogTrigger>
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Science</CardTitle>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Machine Learning</li>
                  <li>APIs</li>
                  <li>LangChain</li>
                  <li>Embedding</li>
                  <li>Vector</li>
                  <li>PowerBi</li>
                  <li>Tableau</li>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Card>
                    <CardHeader>
                      <CardTitle>Web Development</CardTitle>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <li>Vue3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Shadcn UI</li>
                  <li>Tailwind CSS</li>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Card>
                    <CardHeader>
                      <CardTitle>Others</CardTitle>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <li>Kotlin</li>
                  <li>C++</li>
                  <li>Android Studio</li>
                  <li>Git</li>
                  <li>GitHub</li>
                </DialogContent>
              </Dialog>
            </div>
          </ul>
        </p>
      </main>
    </div>
  );
}
