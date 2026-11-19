'use client';
import React, {useState} from "react";
import NavigationBar from "@/components/NavigationBar";
import SideMenu from "@/components/SideMenu";
import MyHome from "@/sections/Home"
import About from "@/sections/About";
import Stats from "@/sections/Stats";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={"flex flex-col min-h-screen"}>
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <main className={"flex flex-1 justify-between pt-14 md:pt-32 flex-col"}>
          <MyHome/>
          <Stats/>
        </main>
      </div>


      <About/>



    </>

  );
}
