import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to My Portfolio
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              I'm a passionate developer creating amazing web experiences.
              Explore my projects and skills below.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
