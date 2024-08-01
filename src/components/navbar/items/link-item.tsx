"use client";

import Link from "next/link";
import {
  NavigationMenuIndicator,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

interface LinkItemProps {
  href: string;
  text: string;
}

import { usePathname } from "next/navigation";
const LinkItems = () => {
  const links: LinkItemProps[] = [
    { href: "/blogs", text: "Blogs" },
    { href: "/gallery", text: "Gallery" },
    { href: "/lists", text: "統計表" }, // 日本語
    { href: "/posts", text: "Posts" },
  ];

  const currentPath = usePathname();

  return (
    <>
      {links.map(({ href, text }) => (
        <NavigationMenuItem key={text}>
          <Link
            href={href}
            className={`group  h-10 w-max px-1.5 py-0.9 rounded-2xl  ${
              currentPath === href
                ? "bg-blue-700  text-black "
                : "font-normal transition-colors hover:bg-blue-300"
            }`}
          >
            {text}
          </Link>
          <NavigationMenuIndicator />
        </NavigationMenuItem>
      ))}
    </>
  );
};

export default LinkItems;
