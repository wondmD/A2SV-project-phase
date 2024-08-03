import React from "react";

interface when_where{
  text : string
}

const WhenAndWhere: React.FC<when_where> = ({text}) => {
  return (
    <section className="flex flex-col mt-14 max-w-full w-[724px] max-md:mt-10">
      <h2 className="text-2xl font-extrabold leading-tight text-slate-800">When & Where</h2>
      <div className="flex gap-5 items-start self-start mt-6 max-md:max-w-full">
        <div className="grid grid-cols-[1fr_5fr] flex-wrap gap-4 min-w-[240px] max-md:max-w-full">
          <div className=" border border-solid border-[#ccc] flex gap-2.5 items-center p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
            <img loading="lazy" src="/images/loc.png"/>
            </div>
            <div>
          <p className="text-base leading-7 text-slate-800 w-[815px] max-md:max-w-full">
            {text}
            
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenAndWhere;