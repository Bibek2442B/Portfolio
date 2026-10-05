import React from "react";
import {cn} from "@/lib/utils";

export default function ButtonIcon({ children, className }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return(
    <div className={cn("flex items-center justify-center border-[0.5px] rounded mx-4 p-1", className)}>
      {children}
    </div>
  );
}