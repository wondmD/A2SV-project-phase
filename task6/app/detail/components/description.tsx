import { title } from "process";
import React from "react";

interface  descriptionProps  {
    text : string;
}

const Description: React.FC<descriptionProps> = ({text}) => {
  return (
    <section className="flex flex-col w-full text-slate-800 max-md:max-w-full">
      <h2 className="text-2xl font-black leading-tight">Description</h2>
      <p className=" mt-4 text-base leading-7 max-md:max-w-full">
        {text}
      </p>
    </section>
  );
};

export default Description;