import { atom } from "jotai";

export const sidebarOpenAtom = atom(false);
export const activeTeamAtom = atom({
  name: "Acme Inc",
  id: "1",
});

type Theme = "light" | "dark" | "system"

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem("vite-ui-theme") as Theme
  return storedTheme ?? "system"
}

export const themeAtom = atom<Theme>(getInitialTheme())

export const setThemeAtom = atom(
  (get) => get(themeAtom),
  (get, set, newTheme: Theme) => {
    set(themeAtom, newTheme)
    localStorage.setItem("vite-ui-theme", newTheme)
    
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      document.documentElement.classList.toggle("dark", systemTheme === "dark")
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
  }
)
