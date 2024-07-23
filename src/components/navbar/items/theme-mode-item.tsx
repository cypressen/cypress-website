"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useTheme } from "next-themes";
const ThemeModeItem = () => {
  const { setTheme } = useTheme();
  const themeColors: string[] = ["Light", "System", "Dark"];
  const [index, setIndex] = useState(1);
  setTheme(themeColors[index].toLowerCase());
  const handleClick = () => {
    setIndex((index) => (index + 1) % themeColors.length);
    setTheme(themeColors[index].toLowerCase());
  };
  return (
    <Badge onClick={handleClick} className="py-0.1">
      {themeColors[index]}
    </Badge>
  );
};

export default ThemeModeItem;
