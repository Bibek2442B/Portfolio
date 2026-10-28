import {Data, NavLink} from '@/types';
import data from '@/public/data/data.json';
import Link from "next/link";
import ButtonIcon from "@/components/ButtonIcon";
import {Menu} from "lucide-react";
import ThemeToggle from "@/components/ThemeButton";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

export default function NavigationBar({menuOpen, setMenuOpen}: {menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>}) {
  const details: Data = data;
  const title: string = details.name.split(' ')[0] + '.' + details.name.split(' ')[1].slice(0, 1).toUpperCase();
  const links: NavLink[] = details.sections.map((section:NavLink):NavLink => {
    return {
      "name": section.name.toLowerCase(),
      "href":section.href.toLowerCase()
    };
  });

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY <= 10) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
      } else if (delta > 10) {
        setIsVisible(false);
        lastScrollY = currentScrollY;
      } else if (delta < -10) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
      }

    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top, 0px)] flex items-center justify-between p-4 bg-bg-alt border-border transition-transform duration-300 will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link
          key={details.name}
          href={"#"}
          aria-label={"Bibek Gnawali's Portfolio"}
        >
          <h1 className={"font-extrabold font-outfit "}>
            <span className={"text-accent font-fira-code font-bold"}> {`< `}</span>
            {`${title}`}
            <span className={"text-accent font-fira-code font-bold"}> {` />`}</span>
          </h1>
        </Link>

        <div className={"flex items-center justify-center"}>
          <div className={"hidden md:flex"}>
            {links.map((section:NavLink) =>
              <Link
                className={"mx-4"}
                key={section.name} href={section.href}
                aria-label={section.name}
              >
                <p className={"font-fira-code font-medium text-text"}>
                  {`./${section.name}`}
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