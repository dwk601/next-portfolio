import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Get In Touch
        </h2>
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex space-x-4">
            <Button asChild variant="outline">
              <Link href="mailto:dongook.kim@outlook.com" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://github.com/dwk601" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://www.linkedin.com/in/dwk1/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
