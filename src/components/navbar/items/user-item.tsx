import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Link from 'next/link'
import StatusItem from './status-item'
const UserItem = () => {
  return (
    <>
      <StatusItem />
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full border-2 hover:border-foreground">
          <Avatar className="h-7 w-7 ">
            <AvatarImage
              src="/kei.png"
              alt="cypress"
            />
            <AvatarFallback> </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              href="/user"
              passHref
            >
              User
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
export default UserItem
