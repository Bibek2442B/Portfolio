import React from "react";
import ButtonIcon from "@/components/ButtonIcon";
import {X} from "lucide-react";
import Link from "next/link";
import {Data, NavLink} from "@/types";
import data from "@/public/data/data.json";

export default function SideMenu({menuOpen, setMenuOpen}: {menuOpen:boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const details: Data = data;
  const links: NavLink[] = details.sections.map((section:NavLink):NavLink => {
    return {
      "name": section.name.toLowerCase(),
      "href":section.href.toLowerCase()
    };
  });
  return(
    <>
      {
        menuOpen &&
        <div
          className={"fixed inset-0 bg-black/60"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-hidden={!menuOpen}
          aria-controls="mobile-menu"
        />
      }
      <aside
        id="mobile-menu"
        className={"flex flex-col fixed top-0 right-0 z-50 h-full bg-background w-40 max-w-[85vw] p-4 transition-transform duration-500 ease-in-out will-change-transform" + (menuOpen ? ' translate-x-0' : ' translate-x-full')}
        aria-hidden={!menuOpen}
      >
        <ButtonIcon className={"self-end border-accent"}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={"Close Menu"}
            aria-controls="mobile-menu"
            aria-hidden={!menuOpen}
          >
            <X />
          </button>
        </ButtonIcon>
        {links.map((section:NavLink) =>
          <Link
            className={"m-4 font-fira-code"}
            key={section.name}
            href={section.href}
            aria-label={section.name}
          >
            {section.name}
          </Link>)
        }
      </aside>
    </>
  );
}