import React from "react";
import { text } from "stream/consumers";

export interface ResponsibilityProps {
  resp: string;
  
}
const Responsibilities :React.FC<ResponsibilityProps> = ({resp}) => {
  return (
    <section className="flex flex-col mt-14 w-full text-slate-800 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-2xl font-black leading-tight">Responsibilities</h2>
      <div className="flex flex-col items-start mt-4 w-full text-base leading-relaxed max-md:max-w-full">
        
          <div className="flex flex-wrap gap-2 items-start mt-2 max-md:max-w-full">
          <img loading="lazy" src="/images/tic.png" alt="" className="object-contain shrink-0 w-5 aspect-square" />
          <div className="w-[682px] max-md:max-w-full">{resp}</div>
        </div>
      
      </div>
    </section>
  );
}

export default Responsibilities;