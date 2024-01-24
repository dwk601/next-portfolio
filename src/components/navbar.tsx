import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/toggle";

export default function Navbar() {
  return (
    <nav>
      <div className="avatar-container">
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/108056780?s=96&v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="toggle-container">
        <ModeToggle />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/experience">Experience</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
