import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="gap-4 self-stretch px-3 py-1.5 bg-slate-50 min-h-[37px] whitespace-nowrap">
      {skill}
    </div>
  );
};

export default SkillTag;