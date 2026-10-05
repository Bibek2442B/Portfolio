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
    <ButtonIcon
      className={"border-accent"}
    >
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme !== "dark" ? <Sun className={"text-orange-400 fill-orange-400"}/> : <Moon className={"text-yellow-500 fill-yellow-500"}/>}
      </button>
    </ButtonIcon>
  );
}