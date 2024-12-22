import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      
      <Label htmlFor="theme-toggle" className="flex items-center space-x-2 cursor-pointer"
       id="theme-toggle"
       checked={isDarkMode}
       onClick={toggleTheme}
      >
        {isDarkMode ? (
          <>
            <Moon className="h-4 w-4 text-gray-500" /> <span>Dark Mode</span>
          </>
        ) : (
          <>
            <Sun className="h-4 w-4 text-yellow-500" /> <span>Light Mode</span>
          </>
        )}
      </Label>
    </div>
  );
}

export default ModeToggle