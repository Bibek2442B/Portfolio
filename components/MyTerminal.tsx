import {useState} from "react";
import {Command} from "../types/index";

export default function MyTerminal(){
  const [history, setHistory] = useState<Command[]>([]);
  if (history.length === 0) setHistory([{command: "ls", output: "file1 file2 file3"}]);
  return(
    <>
      <div className="w-full">
        <div className={"flex w-full items-center bg-card rounded-t-xl p-4  shadow-accent/20 shadow-lg"}>
          <div className={"w-4 h-4 bg-[#EF4444] rounded-full mx-1"}></div>
          <div className={"w-4 h-4 bg-[#F59E0B] rounded-full mx-1"}></div>
          <div className={"w-4 h-4 bg-[#10B981] rounded-full mx-1"}></div>
          <p className={"mx-auto font-fira-code"}>bash - bibek@portugal</p>
          <p className={"font-fira-code text-xl font-bold"}>{">_"} </p>
        </div>
        <div className={"w-full h-96 bg-bg-alt rounded-b-xl p-4 shadow-accent/20 shadow-lg"}>
          {
            history.map((item, index) => {
              return (
                <div key={index}>
                  <p className={"text-accent font-fira-code inline"}>{"~$ "}</p>
                  <p className={"text-foreground font-fira-code inline"}>{item.command}</p>
                  <p className={"text-text font-fira-code ml-5"}>{item.output}</p>
                </div>
              );
            })
          }
          <p className={"text-accent font-fira-code inline"}>{"~$ "}</p>
          <input className={"text-text font-fira-code"} />
        </div>
      </div>
    </>
  );
};