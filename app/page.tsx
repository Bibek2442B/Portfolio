'use client';
import Image from "next/image";
import {getAge} from '@/lib/utils';

import {Data} from '@/types';
import data from '@/public/data/data.json';
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {useState} from "react";

export default function Home() {
  const details: Data = data;
  const age:number = getAge(details.dob);
  const reside:number = getAge(details.residentSince);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={"w-full flex items-center justify-between p-4"}>
        <Link
          key={details.name}
          href={"#"}
        >
          {details.name}
        </Link>
        <div className={"hidden md:flex"}>
          {details.sections.map((section:string) =>
            <Link
              className={"mx-1"}
              key={section} href={"#"}>
              {section}
            </Link>)
          }
        </div>
        <button
          className={"md:hidden"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu/>
        </button>
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
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={"self-end"}
            >
              <X />
            </button>
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
      <div className="flex flex-col flex-1 items-center justify-between bg-zinc-50 font-sans">
        <main className="flex flex-1 w-full p-10 flex-col items-start justify-start">
          <div className="flex">
            <Image
              src="/images/BibekPic.jpeg"
              alt="User Profile"
              width={120}
              height={120}
              className="rounded-full object-cover w-auto"
            />
            <p className="text-2xl mx-10 my-4">
              I am Bibek Gnawali. I am {age} years old. I am originally from Nepal and have been residing in Portugal for {reside} years.
            </p>
          </div>

        </main>
        <footer>

        </footer>
      </div>
    </>

  );
}
