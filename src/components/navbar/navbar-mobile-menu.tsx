import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { NavigationMenuList } from "@/components/ui/navigation-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LinkItems from "@/components/navbar/items/link-item";
import StatusItem from "./items/status-item";
import Link from "next/link";
const NavBarMobileMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full border-2 hover:border-foreground">
          <Avatar className="h-7 w-7">
            <AvatarImage src="/kei.png" alt="cypress" />
            <AvatarFallback> </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>
            <StatusItem />
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-400" />
          <DropdownMenuItem>
            <NavigationMenuList className="flex-col items-start justify-center">
              <DropdownMenuLabel>Pages</DropdownMenuLabel>
              <LinkItems />
            </NavigationMenuList>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-400" />
          <DropdownMenuItem>
            <Link href="/user" passHref>
              User
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavBarMobileMenu;
