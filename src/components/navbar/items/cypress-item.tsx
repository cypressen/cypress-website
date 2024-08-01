import Link from 'next/link'
import Image from 'next/image'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
const CypressItem = () => {
  return (
    <NavigationMenuItem className="list-none">
      <Link href="/">
        <Image
          src="/cypress-logo.png"
          alt="cypress"
          width={64}
          height={28}
          className="flex h-7 w-16 ml-3"
          priority
        />
      </Link>
    </NavigationMenuItem>
  )
}

export default CypressItem
