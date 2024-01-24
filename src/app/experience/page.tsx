import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Work() {
  return (
    <div>
      <main>
        <div className="text-center font-light text-muted-foreground">
          <h1 className="text-4xl font-bold">Work Experience</h1>
          <p className="text-lg mt-2">
            Here are some of the places I've worked at!
          </p>
        </div>
        <div className="drawer-container">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Presidential Intern</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>UVU Presidential Intern</DrawerTitle>
                  <DrawerDescription>
                    <p className="text-sm text-muted-foreground">
                      Aug 2023 - Present
                    </p>
                    <ul>
                      <li>
                        Led cross-functional teams to initiate and align
                        projects with organizational goals
                      </li>
                      <li>
                        Used <strong>XML, Vue3, HTML, and CSS </strong>to
                        participate in the redesigning of the{" "}
                        <strong>UVU student website</strong>
                      </li>
                      <li>
                        Ensured <strong>efficient</strong> and{" "}
                        <strong>scalable </strong>solutions through meticulous
                        project execution.
                      </li>
                    </ul>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Data Warehouse Engineer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>
                    The Church of Jesus Christ of Latter-day Saints
                  </DrawerTitle>
                  <DrawerDescription>
                    <p className="text-sm text-muted-foreground">
                      May 2023 - Aug 2023
                    </p>
                    <ul>
                      <li>
                        Utilized <strong>ETL tools</strong> and{" "}
                        <strong>SQL</strong> for data warehousing tasks,
                        resulting in a 20% increase in data processing
                        efficiency.
                      </li>
                      <li>
                        Developed and maintained <strong>data pipelines</strong>{" "}
                        using <strong>Python</strong>, improving data flow and
                        reducing data processing time by 15%.
                      </li>
                      <li>
                        Implemented data quality checks using{" "}
                        <strong>Data Quality Frameworks</strong>, ensuring high
                        data accuracy and reliability.
                      </li>
                    </ul>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Data Analyst</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>UVU Data Analyst</DrawerTitle>
                  <DrawerDescription>
                    <p className="text-sm text-muted-foreground">
                      April 2023 - August 2023
                    </p>
                    <ul>
                      <li>
                        Utilized <strong>Python</strong> and{" "}
                        <strong>SQL</strong> for data analysis, focusing on
                        student success metrics, resulting in a 20% increase in
                        available data for analysis and informed
                        decision-making.
                      </li>
                      <li>
                        Developed a dynamic live dashboard using{" "}
                        <strong>Tableau</strong>, integrating new datasets to
                        enhance data visualization and facilitate data-driven
                        decision-making processes. This updated dashboard
                        allowed students and faculty to easily access and
                        analyze the data, resulting in a improvement in data
                        accessibility and user satisfaction.
                      </li>
                    </ul>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </main>
    </div>
  );
}
