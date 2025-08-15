import { SunMoon, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const toggleQuick = () => {
        const next = theme === "dark" ? "lemonade" : "dark";
        setTheme(next);
    };

    return (
        <div className="dropdown dropdown-hover">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-sm btn-ghost"
                onClick={toggleQuick}
            >
                <SunMoon className="w-5 h-5" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-36"
            >
                <li><a onClick={() => setTheme("lemonade")}><Sun className="w-4 h-4" /> Light</a></li>
                <li><a onClick={() => setTheme("dark")}><Moon className="w-4 h-4" /> Dark</a></li>
                <li><a onClick={() => setTheme("system")}><Monitor className="w-4 h-4" /> System</a></li>
            </ul>
        </div>
    );
}

export default ThemeSwitcher;
