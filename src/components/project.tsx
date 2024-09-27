import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import portfolioImage from "@/public/images/portfolio.png";
import myuvu from "@/public/images/myuvu.png";
import athlos from "@/public/images/athlos.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "It is this website you are currently viewing.",
    imageUrl: portfolioImage,
    link: "https://github.com/dwk601/next-portfolio",
  },
  {
    id: 2,
    title: "UVU Student Website",
    description: "Redesign of the UVU student website.",
    imageUrl: myuvu,
    link: "https://my.uvu.edu/student/events",
  },
  {
    id: 3,
    title: "Athlos",
    description: "A sports group management web application.",
    imageUrl: athlos,
    link: "https://github.com/dwk601/athlos-svelte",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[200px] object-cover rounded-md"
                  width={200}
                  height={100}
                />
                <Button className="w-full mt-4" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}