import React from 'react';

interface InfoItemProps {
  icon: string;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <div className="flex gap-4 items-center mt-5">
      <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 bg-white rounded-[50px] border border-solid border-[#ccc]">
        <img loading="lazy" src={icon} alt="" className="object-contain w-6 aspect-square" />
      </div>
      <div className="flex flex-col self-stretch my-auto text-base leading-relaxed">
        <div className="text-slate-600">{label}</div>
        <div className="font-semibold text-slate-800">{value}</div>
      </div>
    </div>
  );
};

export default InfoItem;
