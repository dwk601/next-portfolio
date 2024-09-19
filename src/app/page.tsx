import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Project from "@/components/project";

export default function home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Experience />
        <Project/>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["React", "Next.js", "TypeScript", "Node.js", "CSS", "HTML", "JavaScript", "Git"].map((skill) => (
                <div key={skill} className="flex items-center justify-center p-4 bg-gray-100 rounded-md dark:bg-gray-800">
                  <span className="text-lg font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Get In Touch</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="outline">
                  <Link href="mailto:your.email@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://github.com/yourusername">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://linkedin.com/in/yourusername">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}