'use client';
import {Data} from '@/types';
import data from '@/public/data/data.json';
import {useState} from "react";
import {Menu, X} from "lucide-react";

interface HeaderSectionProps{
  item: string;
}
function HeaderSection({item}: HeaderSectionProps){
  return(
    <a className="mx-1" href="#" rel="noopener noreferrer">
      {item}
    </a>
  )
}
export default function Header(){
  const details:Data = data;
  const [isOpen, setIsOpen] = useState(false);
  return(
    <header className="flex justify-between w-full p-4 bg-background">
      <a href="#" rel="noopener noreferrer">
        {details.name}
      </a>
      <button
        onClick={()=>setIsOpen(!isOpen)}
      >
        {isOpen? <X />: <Menu />}
      </button>
      {isOpen && (
        <div className="fixed  top-30 right-0">
          Hello there
        </div>
      )}
      <div className="hidden md:flex mx-4">
        {details.sections.map((section:string) =>
          <HeaderSection key={section} item={section}/>
        )}
      </div>
    </header>
  );
}
