import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Navbar() {
  return (
    <nav>
      <div className="avatar-container">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/108056780?s=96&v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Menubar>
        <MenubarMenu>
          <ul>
            <MenubarTrigger>
              <li>
                <Link href="/">Home</Link>
              </li>
            </MenubarTrigger>
            <MenubarTrigger>
              <li>
                <Link href="/Experience">Experience</Link>
              </li>
            </MenubarTrigger>
            <MenubarTrigger>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </MenubarTrigger>
          </ul>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
