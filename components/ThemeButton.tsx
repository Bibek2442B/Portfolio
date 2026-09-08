import {useTheme} from "next-themes";
import {Sun, Moon} from "lucide-react";
import {useSyncExternalStore} from "react";
import ButtonIcon from "@/components/ButtonIcon";

export default function ThemeToggle(){
  const {theme, setTheme} = useTheme();
  const mounted = useSyncExternalStore(
    ()=> () => {},
    ()=>true,
    ()=>false,
  )
  if (!mounted) return null;
  return (
    <ButtonIcon>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun/> : <Moon/>}
      </button>
    </ButtonIcon>
  );
}