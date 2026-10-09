import {Data} from '@/types';
import data from '@/public/data/data.json';
import Link from "next/link";
import ButtonIcon from "@/components/ButtonIcon";
import {Menu} from "lucide-react";
import ThemeToggle from "@/components/ThemeButton";
import React from "react";
export default function NavigationBar({menuOpen, setMenuOpen}: {menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const details: Data = data;
  const title: string = details.name.split(' ')[0] + '.' + details.name.split(' ')[1].slice(0, 1).toUpperCase();
  const links: string[] = details.sections.map((section:string) => section.toLowerCase());
  return (
    <>
      <nav className={"w-full flex items-center justify-between p-4 bg-bg-alt border-border"}>
        <Link
          key={details.name}
          href={"#"}
          aria-label={"Home"}
        >
          <h1 className={"font-extrabold font-outfit "}>
            <span className={"text-accent font-fira-code font-bold"}> {`< `}</span>
            {`${title}`}
            <span className={"text-accent font-fira-code font-bold"}> {` />`}</span>
          </h1>
        </Link>

        <div className={"flex items-center justify-center"}>
          <div className={"hidden md:flex"}>
            {links.map((section:string) =>
              <Link
                className={"mx-4"}
                key={section} href={"#"}
                aria-label={section}
              >
                <p className={"font-fira-code font-medium text-text"}>
                  {`./${section}`}
                </p>
              </Link>)
            }
          </div>
          <ButtonIcon className={"md:hidden border-accent"}>
            <button
              className={"md:hidden"}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={"Open Menu"}
              aria-hidden={menuOpen}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu/>
            </button>
          </ButtonIcon>
          <ThemeToggle/>
        </div>
      </nav>
    </>
  );
}