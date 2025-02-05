export default function Skill() {
  const skills = [
    "React",
    "Svelte",
    "Vue.js",
    "Next.js",
    "SvelteKit",
    "TypeScript",
    "Node.js",
    "CSS",
    "HTML",
    "JavaScript",
    "Python",
    "Git",
  ];

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 section-bg">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-md"
            >
              <span className="text-lg font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
