import Link from "next/link";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
const CypressItem = () => {
  return (
    <NavigationMenuItem>
      <Link href="/">
        <img src="/mygologo.png" alt="cypress" className="flex h-7 w-16 ml-3" />
      </Link>
    </NavigationMenuItem>
  );
};

export default CypressItem;
