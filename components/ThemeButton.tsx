import {useTheme} from "next-themes";
import {Sun, Moon} from "lucide-react";
import {useSyncExternalStore} from "react";

export default function ThemeToggle(){
  const {theme, setTheme} = useTheme();
  const mounted = useSyncExternalStore(
    ()=> () => {},
    ()=>true,
    ()=>false,
  )
  if (!mounted) return null;
  return (
    <div className={"flex items-center justify-center border-[0.5px] border-border rounded  mx-2 p-1"}>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun/> : <Moon/>}
      </button>
    </div>
  );
}