import { useAtom } from "jotai"
import { useEffect } from "react"
import { themeAtom } from "@/store/atoms"

export function ThemeInit() {
  const [theme] = useAtom(themeAtom)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const updateTheme = () => {
      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light"
        document.documentElement.classList.toggle("dark", systemTheme === "dark")
      } else {
        document.documentElement.classList.toggle("dark", theme === "dark")
      }
    }

    updateTheme()
    mediaQuery.addEventListener("change", updateTheme)
    
    return () => {
      mediaQuery.removeEventListener("change", updateTheme)
    }
  }, [theme])

  return null
}
