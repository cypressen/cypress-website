'use client'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeModeItem = () => {
  const { setTheme } = useTheme()
  const themeColors: string[] = ['Light', 'Dark', 'System']
  const [index, setIndex] = useState<number>(1)

  const handleClick = () => {
    const newIndex = (index + 1) % themeColors.length
    setIndex(newIndex)
    setTheme(themeColors[newIndex].toLowerCase())
  }
  return (
    <Badge
      onClick={handleClick}
      className="py-0.1"
    >
      {themeColors[index]}
    </Badge>
  )
}

export default ThemeModeItem
