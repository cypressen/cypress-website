import Link from "next/link";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
const CypressItem = () => {
  return (
    <NavigationMenuItem className="list-none">
      <Link href="/">
        <img
          src="/cypress-logo.png"
          alt="cypress"
          className="flex h-7 w-16 ml-3"
        />
      </Link>
    </NavigationMenuItem>
  );
};

export default CypressItem;
