import {ThemeProvider} from "next-themes";
import React from "react";
export default function MyThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"dark"}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  )
}