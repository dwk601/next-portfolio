import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="contact-container flex justify-center items-center">
      <Card className="">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Reach out to me via these platforms.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="email"
                  className="font-light text-muted-foreground"
                >
                  Email
                </Label>
                <a href="mailto:dongook.kim@outlook.com" id="email">
                  dongook.kim@outlook.com
                </a>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="linkedin"
                  className="font-light text-muted-foreground"
                >
                  LinkedIn
                </Label>
                <a href="https://www.linkedin.com/in/dwk1/" id="linkedin">
                  dwk1
                </a>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="github"
                  className="font-light text-muted-foreground"
                >
                  GitHub
                </Label>
                <a href="https://github.com/dwk601" id="github">
                  dwk601
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}
