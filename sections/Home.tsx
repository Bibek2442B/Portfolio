import {Dot} from "lucide-react";
import React from "react";
import {Data} from "@/types";
import data from "@/public/data/data.json";
import MyTerminal from "@/components/MyTerminal";


export default function Home() {
  const details: Data = data;
  return (
    <section id={"home"} className={"p-4 px-12 flex flex-col md:flex-row justify-between items-center bg-background min-h-[calc(100vh-64px)]"} >
      <div className={"p-4 w-full md:max-w-[48%]"}>
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
      <div className={"flex w-full md:max-w-[48%]"}>
        <MyTerminal/>
      </div>

    </section>
  );
}