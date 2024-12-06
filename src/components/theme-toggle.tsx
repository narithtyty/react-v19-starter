import { Moon, Sun, Check, Monitor } from "lucide-react"
import { useAtom } from "jotai"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { themeAtom, setThemeAtom } from "@/store/atoms"

export function ThemeToggle() {
  const [theme] = useAtom(themeAtom)
  const [, setTheme] = useAtom(setThemeAtom)
  const themes = ["light", "dark", "system"] as const

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t}
            onClick={() => setTheme(t)}
            className="gap-2"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                {t === "light" && <Sun className="h-4 w-4" />}
                {t === "dark" && <Moon className="h-4 w-4" />}
                {t === "system" && <Monitor className="h-4 w-4" />}
                <span className="capitalize">{t}</span>
              </div>
              {theme === t && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
