import React from "react";
import ButtonIcon from "@/components/ButtonIcon";
import {X} from "lucide-react";
import Link from "next/link";
import {Data} from "@/types";
import data from "@/public/data/data.json";

export default function SideMenu({menuOpen, setMenuOpen}: {menuOpen:boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const details: Data = data;
  const links: string[] = details.sections.map((section:string) => section.toLowerCase());
  return(
    <>
      <div
        className={"fixed inset-0 bg-black/60"}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-hidden={!menuOpen}
        aria-expanded={!menuOpen}
        aria-controls="mobile-menu"
      />
      <aside
        id="mobile-menu"
        className={"flex flex-col fixed top-0 right-0 h-full bg-background w-40 max-w-[85vw] p-4"}
      >
        <ButtonIcon className={"self-end border-accent"}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={"Close Menu"}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-hidden={!menuOpen}
          >
            <X />
          </button>
        </ButtonIcon>
        {links.map((section:string) =>
          <Link
            className={"m-4 font-fira-code"}
            key={section}
            href={"#"}
            aria-label={section}
          >
            {section}
          </Link>)
        }
      </aside>
    </>
  );
}