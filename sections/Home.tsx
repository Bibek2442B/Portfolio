import {Dot} from "lucide-react";
import React from "react";
import {Data} from "@/types";
import data from "@/public/data/data.json";


export default function Home() {
  const details: Data = data;
  return (
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
  );
}