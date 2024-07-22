import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenuItem,
  NavigationMenuIndicator,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const UserItem = () => {
  const id: string = "kei";
  const status: string = "admin";

  return (
    <>
      <Badge className="bg-blue-400" variant={"outline"}>
        {id} | {status}
      </Badge>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-7 w-7">
            <AvatarImage src="/kei.png" alt="cypress" />
            <AvatarFallback> </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
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
export default UserItem;
