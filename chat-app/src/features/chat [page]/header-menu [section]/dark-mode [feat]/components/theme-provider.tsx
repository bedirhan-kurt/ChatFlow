import { useContext, useEffect, useState, createContext } from "react"

// Define the available theme options
type Theme = "dark" | "light" | "system"

// Define the props for the ThemeProvider components
type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

// Define the state managed by the ThemeProvider
type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

// Initialize the ThemeProviderContext
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

/**
 * ThemeProvider Component
 *
 * Responsibility:
 * Provides a context for managing and sharing the application's theme state.
 * This components allows the theme to be dynamically updated and persists the theme in localStorage.
 *
 * Features:
 * - Manages the theme state (light, dark, or system).
 * - Applies the selected theme to the document's root element.
 * - Persists the theme in localStorage for consistency across sessions.
 *
 * @components
 * @param {ThemeProviderProps} props - The props for the ThemeProvider components.
 * @returns {JSX.Element} The ThemeProvider components.
 */

export function ThemeProvider({
                                  children,
                                  defaultTheme = "system",
                                  storageKey = "vite-ui-theme",
                                  ...props
                              }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement

        // Remove existing theme classes
        root.classList.remove("light", "dark")

        if (theme === "system") {
            // Apply system theme based on user preferences
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        // Apply the selected theme
        root.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme) // Persist theme in localStorage
            setTheme(theme) // Update theme state
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

/**
 * useTheme Hook
 *
 * Responsibility:
 * Provides access to the theme context, including the current theme and a function to update it.
 *
 * Features:
 * - Retrieves the current theme and the `setTheme` function from the context.
 * - Ensures the hook is used within a `ThemeProvider`.
 *
 * @throws {Error} If the hook is used outside of a `ThemeProvider`.
 * @returns {ThemeProviderState} The current theme state and the `setTheme` function.
 */

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}