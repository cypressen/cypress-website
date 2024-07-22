"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
const ThemeModeItem = () => {
  const themeColors: string[] = ["Light", "Dark", "System"];
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((index + 1) % themeColors.length);
  };
  return (
    <Badge onClick={handleClick} className="py-0.1">
      {themeColors[index]}
    </Badge>
  );
};

export default ThemeModeItem;
