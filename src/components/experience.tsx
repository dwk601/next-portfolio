import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Experience() {
  const experiences = [
    {
      title: "Student Web Developer",
      company: "Utah Valley University",
      period: "May 2024 - Present",
      fullDescription: [
        "Collaborate in a cross-functional team to maintain and improve the university website and student portal using Vue.js",
        "Contribute to mobile app development using Flutter, demonstrating adaptability to various development environments",
        "Improved website accessibility, raising the SiteImprove score by 17% over a 3-month period",
        "Conduct compatibility reviews for new web content, ensuring optimal user experience across platforms",
      ],
      buttonText: "View Experience",
    },
    {
      title: "Presidential Intern",
      company: "Utah Valley University",
      period: "Aug 2023 - May 2024",
      fullDescription: [
        "Led cross-functional teams to initiate and align projects with organizational goals",
        "Used XML, Vue3, HTML, and CSS to participate in the redesigning of the UVU student website",
        "Ensured efficient and scalable solutions through meticulous project execution.",
      ],
      buttonText: "View Experience",
    },
    {
      title: "Data Warehouse Engineer",
      company: "The Church of Jesus Christ of Latter-day Saints",
      period: "May 2023 - Aug 2023",
      fullDescription: [
        "Utilized ETL tools and SQL for data warehousing tasks, resulting in a 20% increase in data processing efficiency.",
        "Developed and maintained data pipelines using Python, improving data flow and reducing data processing time by 15%.",
        "Implemented data quality checks using Data Quality Frameworks, ensuring high data accuracy and reliability.",
      ],
      buttonText: "View Experience",
    },
    {
      title: "Data Analyst",
      company: "Utah Valley University",
      period: "April 2023 - August 2023",
      fullDescription: [
        "Utilized Python and SQL for data analysis, focusing on student success metrics, resulting in a 20% increase in available data for analysis and informed decision-making.",
        "Developed a dynamic live dashboard using Tableau, integrating new datasets to enhance data visualization and facilitate data-driven decision-making processes. This updated dashboard allowed students and faculty to easily access and analyze the data, resulting in a improvement in data accessibility and user satisfaction.",
      ],
      buttonText: "View Experience",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-12 md:py-24 lg:py-32 section-bg"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          My Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl font-bold">{experience.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {experience.company}
                </CardDescription>
                <CardDescription className="text-sm text-muted-foreground">
                  {experience.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full mt-4 hover:scale-[1.02] transition-transform" 
                      variant="outline"
                    >
                      {experience.buttonText}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] bg-white dark:bg-gray-800 border-none shadow-2xl">
                    <DialogHeader className="space-y-4">
                      <div>
                        <DialogTitle className="text-2xl font-bold mb-2">
                          {experience.title}
                        </DialogTitle>
                        <p className="text-primary font-medium">{experience.company}</p>
                        <p className="text-sm text-muted-foreground">{experience.period}</p>
                      </div>
                      <DialogDescription className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-3 text-foreground">
                          {experience.fullDescription.map((desc, i) => (
                            <li key={i} className="text-base">{desc}</li>
                          ))}
                        </ul>
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
