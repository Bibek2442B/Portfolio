'use client';
import Image from "next/image";
import {getAge} from '@/lib/utils';
import ThemeToggle from "@/components/ThemeButton";

import {Data} from '@/types';
import data from '@/public/data/data.json';
import Link from "next/link";
import {Menu, X, Dot} from "lucide-react";
import React, {useState} from "react";
import ButtonIcon from "@/components/ButtonIcon";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  const details: Data = data;
  const age:number = getAge(details.dob);
  const reside:number = getAge(details.residentSince);
  const [menuOpen, setMenuOpen] = useState(false);

  const header={
    titleName: details.name.split(' ')[0] + '.' + details.name.split(' ')[1].split('')[0],
    sections: details.sections.map((section:string) => section.toLowerCase()),
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

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
              {header.sections.map((section:string) =>
                <Link
                  className={"m-4 font-fira-code"}
                  key={section} href={"#"}>
                  {section}
                </Link>)
              }
            </aside>
          </>
        )}

        <section id={"home"} className={"p-4 flex flex-col md:flex-row justify-between items-center bg-background min-h-[calc(100vh-64px)]"} >
          <div className={"p-4 md:max-w-[45%]"}>
            <p className={"bg-accent/10 border-accent/25 border rounded-full p-2 text-accent font-fira-code font-semibold text-xs inline"}>
              <Dot
                className={"text-accent inline w-8 h-8 p-0 m-0"}
              />
              {details.status}
            </p>
            <p className={"text-6xl font-extrabold font-outfit my-4"}>
              Hi, I&#39;m {details.name}
            </p>
            <p className={"text-2xl font-semibold font-fira-code text-accent"}>
              Informatics Engineer
            </p>
            <p className={"my-6 text-text font-geist text-lg"}>
              Recent graduate from Polytechnic University of Bragança, Portugal. I build robust digital products and services that solve real-world problems combining modern software engineering with efficient, user-centric fullstack paradigms.
            </p>
          </div>
          <div className={"flex md:max-w-[45%]"}>
           <div>

           </div>
            <div className={"text-text font-geist text-lg"}>
              Hello! I'm Bibek, a 23-year-old Nepalese developer who has called Portugal home for the last 6 years. My journey into technology began with curiosity about how things work under the hood — and it hasn't stopped since.

              I recently completed my Bachelor's in Informatics Engineering at the Polytechnic Institute of Bragança, where I honed my skills in software development, algorithms, databases, and system design.
            </div>
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
