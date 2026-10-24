import React, {useEffect, useRef, useState} from "react";
import {Command} from "@/types";

export default function MyTerminal(){
  const [history, setHistory] = useState<Command[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    scrollRef.current?.scrollTo({top: scrollRef.current.scrollHeight, behavior: "smooth"});
  }, [history]);

  if (history.length === 0) setHistory([{command: "ls", output: "file1 file2 file3"}]);

  const handleKeyDown= (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === "Enter"){
      if (inputValue === "") return;
      setHistory([...history, {command: inputValue, output: "output"}]);
      setInputValue("");
    }
  }

  const handleKeyUp= (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === "ArrowUp"){
      if (inputRef.current) inputRef.current.value = history[history.length - 1].command;
    }
  }
  return(
    <>
      <div
        className="w-full"
        onClick={() => inputRef.current?.focus()}
      >
        <div className={"flex w-full items-center bg-card rounded-t-xl p-4  shadow-accent/20 shadow-lg"}>
          <div className={"w-4 h-4 bg-[#EF4444] rounded-full mx-1"}></div>
          <div className={"w-4 h-4 bg-[#F59E0B] rounded-full mx-1"}></div>
          <div className={"w-4 h-4 bg-[#10B981] rounded-full mx-1"}></div>
          <p className={"mx-auto font-fira-code"}>bash - bibek@portugal</p>
          <p className={"font-fira-code text-xl font-bold"}>{">_"} </p>
        </div>
        <div
          ref={scrollRef}
          className={"w-full h-96 bg-bg-alt rounded-b-xl p-4 shadow-accent/20 shadow-lg overflow-y-scroll"}
        >
          {
            history.map((item, index) => {
              return (
                <div key={index} className="my-2">
                  <p className={"text-accent font-fira-code inline"}>{"~$ "}</p>
                  <p className={"text-foreground font-fira-code inline"}>{item.command}</p>
                  <p className={"text-text font-fira-code ml-5"}>{item.output}</p>
                </div>
              );
            })
          }
          <p className={"text-accent font-fira-code inline"}>{"~$ "}</p>
          <input
            ref={inputRef}
            className={"text-foreground font-fira-code outline-none"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>
    </>
  );
};