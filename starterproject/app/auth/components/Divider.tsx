import React from 'react';

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="flex gap-4 items-center mt-6 w-full text-base leading-relaxed text-center text-gray-800 rounded-none">
      <div className="shrink-0 self-stretch my-auto h-px bg-zinc-200 w-[109px]" />
      <div className="flex-auto self-stretch">{text}</div>
      <div className="shrink-0 self-stretch my-auto h-px bg-zinc-200 w-[108px]" />
    </div>
  );
};

export default Divider;