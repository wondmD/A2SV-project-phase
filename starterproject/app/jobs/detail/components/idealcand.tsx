import React from "react";


interface ideal_candidate {
  idealcand: string;
  requirements: string;
};



const IdealCandidate: React.FC<ideal_candidate> = ({ idealcand, requirements }) => {
  return (
    <section className="flex flex-col mt-14 w-full text-slate-800 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-2xl font-black leading-tight">Ideal Candidate we want</h2>
      <div className="flex flex-col mt-4 w-full text-base leading-7 max-md:max-w-full">
        <div className="flex gap-2 items-start w-full max-md:max-w-full">
          <div className="py-1.5 w-[815px] max-md:max-w-full">
            <ul>
              <li>
                <strong>{idealcand}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-2xl mt-5 font-black leading-tight">Requirements</h2>

      <div className="flex flex-col mt-4 w-full text-base leading-7 max-md:max-w-full">
        <div className="flex gap-2 items-start w-full max-md:max-w-full">
          <div className="py-1.5 w-[815px] max-md:max-w-full">
            <ul>
              <li>
                <strong>{requirements}</strong>
              </li>

              <li>
                <strong>{requirements}</strong>
              </li>



            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealCandidate;