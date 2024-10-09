import Experience from "@/components/experience";
import Home from "@/components/home";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Skill from "@/components/skill";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="mt-16">
        <BackgroundBeamsWithCollision>
        <section id="home">
          <Home />
        </section>
        </BackgroundBeamsWithCollision>
        <Experience />
        <Project />
        <Skill />
        <Contact />
      </main>
    </div>
  );
}