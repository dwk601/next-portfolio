import Experience from "@/components/experience";
import Home from "@/components/home";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Skill from "@/components/skill";

export default function home() {
  return (
    <div className=" min-h-screen">
      <main className="mt-16">
        <section id="home">
          <Home />
        </section>
        <Experience />
        <Project />
        <Skill />
        <Contact />
      </main>
    </div>
  );
}
