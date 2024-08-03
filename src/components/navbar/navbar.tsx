'use client'
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import LinkItems from '@/components/navbar/items/link-item'
import UserItem from './items/user-item'
import ThemeModeItem from './items/theme-mode-item'
import CypressItem from './items/cypress-item'
import NavBarMobileMenu from './navbar-mobile-menu'
import { useState, useEffect } from 'react'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const MobileVer = () => {
    return (
      <>
        <NavigationMenuList>
          <CypressItem />
        </NavigationMenuList>

        <NavigationMenuList>
          <ThemeModeItem />
          <NavBarMobileMenu />
        </NavigationMenuList>
      </>
    )
  }

  const PCVer = () => {
    return (
      <>
        <NavigationMenuList className="space-x-2">
          <CypressItem />
          <LinkItems />
        </NavigationMenuList>

        <NavigationMenuList className="mr-5 space-x-1">
          <ThemeModeItem />
          <UserItem />
        </NavigationMenuList>
      </>
    )
  }
  return (
    <NavigationMenu className="max-w-full  justify-between select-none shadow-md backdrop-filter backdrop-blur-lg p-.8">
      {isMobile ? <MobileVer /> : <PCVer />}
    </NavigationMenu>
  )
}

export default Navbar
