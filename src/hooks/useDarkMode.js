import { useEffect, useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'

const Theme = {
  light: 'light',
  dark: 'dark',
}

const useDarkMode = () => {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)')
    ? Theme.dark
    : Theme.light
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || preferredTheme
  )

  const themeToggler = () => {
    theme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light)
  }

  useEffect(() => {
    document.body.className = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, themeToggler]
}

export default useDarkMode
