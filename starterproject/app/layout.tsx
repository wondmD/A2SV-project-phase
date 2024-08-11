import React from "react";
import  Provider  from "./Provider";
import "./globals.css"
interface IProps {
  children: React.ReactNode;
}

export default function Rootlayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>

      </body>
    </html>
  );
}