import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import LinkItems from "@/components/navbar/items/link-item";
import UserItem from "./items/user-item";
import ThemeModeItem from "./items/theme-mode-item";
import CypressItem from "./items/cypress-item";
const Navbar = () => {
  return (
    <NavigationMenu className="maple-font max-w-full  justify-between select-none shadow-md backdrop-filter backdrop-blur-lg p-.8">
      <NavigationMenuList className="space-x-2">
        <CypressItem />
        <LinkItems />
      </NavigationMenuList>

      <NavigationMenuList className="mr-5 space-x-1">
        <ThemeModeItem />
        <UserItem />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
