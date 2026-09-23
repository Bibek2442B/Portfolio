'use client';
import Image from "next/image";
import {getAge} from '@/lib/utils';
import ThemeToggle from "@/components/ThemeButton";

import {Data} from '@/types';
import data from '@/public/data/data.json';
import Link from "next/link";
import {Menu, X} from "lucide-react";
import React, {useState} from "react";
import ButtonIcon from "@/components/ButtonIcon";

export default function Home() {
  const details: Data = data;
  const age:number = getAge(details.dob);
  const reside:number = getAge(details.residentSince);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav className={"w-full flex items-center justify-between p-4 border-b"}>
          <Link
            key={details.name}
            href={"#"}
          >
            {details.name}
          </Link>

          <div className={"flex items-center justify-center"}>
            <ThemeToggle/>
            <div className={"hidden md:flex"}>
              {details.sections.map((section:string) =>
                <Link
                  className={"mx-2"}
                  key={section} href={"#"}
                >
                  {section}
                </Link>)
              }
            </div>
            <ButtonIcon className={"md:hidden"}>
              <button
                className={"md:hidden"}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Menu/>
              </button>
            </ButtonIcon>
          </div>

        </nav>

        {menuOpen && (
          <>
            <div
              className={"fixed inset-0 bg-black/60"}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-hidden={true}
            />
            <aside
              className={"flex flex-col fixed top-0 right-0 h-full bg-background w-50 max-w-[85vw] p-4"}
            >
              <ButtonIcon className={"self-end"}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <X />
                </button>
              </ButtonIcon>
              {details.sections.map((section:string) =>
                <Link
                  className={"mx-1"}
                  key={section} href={"#"}>
                  {section}
                </Link>)
              }
            </aside>
          </>
        )}

        <section id={"home"} className={"p-4 flex flex-col justify-center items-center flex-1"} >
          <div>
            <p className={"text-accent text-xl my-4"}>Hi, my name is</p>
            <h1 className={"text-4xl my-4"}>Bibek Gnawali</h1>
            <p className={"text-xl text-text"}>I am an Informatics Engineer based in Portugal, passionate about crafting, clean, efficient, and user-focused digital experiences. Graduated from the Polytechnic University of Bragança.</p>
          </div>
        </section>
      </div>

      <section id={"about"}>

      </section>

      <section id={"skills"}>

      </section>

      <section id={"education"}>

      </section>

      <section id={"projects"}>

      </section>

      <section id={"contact"}>

      </section>

    </>

  );
}
