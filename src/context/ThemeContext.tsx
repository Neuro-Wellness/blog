import { createContext, useContext, useState, useEffect } from "react";
import { getThemeFromTemperature } from "../utils/ThemeMap";

type Theme = "cupcake" | "dark" | "system";

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    colorTheme: string;
}


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("cupcake");
    const [colorTheme, setColorTheme] = useState("spring"); // 添加这一行

    useEffect(() => {
        const init = async () => {
            // const weather = await fetchWeather();
            const selectedTheme = getThemeFromTemperature(0);
            setColorTheme(selectedTheme);
        };
        init();
    }, []);

    useEffect(() => {
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "cupcake";
            document.documentElement.setAttribute("data-theme", systemTheme);
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, colorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
};

