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

  const header={
    titleName: details.name.split(' ')[0] + '.' + details.name.split(' ')[1].split('')[0]
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav className={"w-full flex items-center justify-between p-4 bg-bg-alt border-border"}>
          <Link
            key={details.name}
            href={"#"}
          >
            <h1 className={"font-extrabold font-outfit "}>
              <span className={"text-accent font-fira-code font-bold"}> {`< `}</span>
              {`${header.titleName}`}
              <span className={"text-accent font-fira-code font-bold"}> {` />`}</span>
            </h1>
          </Link>

          <div className={"flex items-center justify-center"}>
            <div className={"hidden md:flex"}>
              {details.sections.map((section:string) =>
                <Link
                  className={"mx-4"}
                  key={section} href={"#"}
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
              >
                <Menu/>
              </button>
            </ButtonIcon>
            <ThemeToggle/>
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
              className={"flex flex-col fixed top-0 right-0 h-full bg-background w-40 max-w-[85vw] p-4"}
            >
              <ButtonIcon className={"self-end border-accent"}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <X />
                </button>
              </ButtonIcon>
              {details.sections.map((section:string) =>
                <Link
                  className={"m-4 font-fira-code"}
                  key={section} href={"#"}>
                  {section}
                </Link>)
              }
            </aside>
          </>
        )}

        <section id={"home"} className={"p-4 flex flex-col justify-center items-center flex-1 bg-background"} >
          <div>
            <p className={"text-accent text-xl my-4"}>Hi, my name is</p>
            <h1 className={"text-4xl my-4"}>Bibek Gnawali</h1>
            <p className={"text-xl text-text"}>I am an Informatics Engineer based in Portugal, passionate about crafting, clean, efficient, and user-focused digital experiences. Graduated from the Polytechnic University of Bragança.</p>
          </div>
        </section>
      </div>

      <section
        id={"about"}
        className={"p-4 flex flex-col justify-center items-center flex-1"}
      >
        <h1 className={"text-4xl font-bold my-4"}>About Me</h1>
        <p>
          Hello! I'm Bibek, a 23-year-old Nepalese developer who has called Portugal home for the last 6 years. My journey into technology began with curiosity about how things work under the hood — and it hasn't stopped since.

          I recently completed my Bachelor's in Informatics Engineering at the Polytechnic Institute of Bragança, where I honed my skills in software development, algorithms, databases, and system design.

          I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll probably find me exploring new tech, contributing to side projects, or discovering Portugal's beautiful landscapes.
        </p>
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
