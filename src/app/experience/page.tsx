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
                        Used XML, Vue3, HTML, and CSS to participate in the
                        redesigning of the UVU student website
                      </li>
                      <li>
                        Ensured efficient and scalable solutions through
                        meticulous project execution.
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
                        Utilized Python and SQL for data analysis and reporting,
                        extracting valuable insights from complex datasets,
                        resulting in a 15% increase in data accuracy and a 20%
                        improvement in decision-making processes.
                      </li>
                      <li>
                        Developed interactive dashboards using Power BI,
                        enhancing data accessibility and visualization for
                        stakeholders, leading to a 15% reduction in time spent
                        on data analysis and reporting.
                      </li>
                      <li>
                        Utilized Jira for efficient project management, ensuring
                        adherence to timelines and seamless coordination of
                        tasks, resulting in a 5% increase in project completion
                        rate and a 10% improvement in team productivity.
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
                        Utilized Python and SQL for data analysis, focusing on
                        student success metrics, resulting in a 20% increase in
                        available data for analysis and informed
                        decision-making.
                      </li>
                      <li>
                        Developed a dynamic live dashboard using Tableau,
                        integrating new datasets to enhance data visualization
                        and facilitate data-driven decision-making processes.
                        This updated dashboard allowed students and faculty to
                        easily access and analyze the data, resulting in a 15%
                        improvement in data accessibility and user satisfaction.
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
