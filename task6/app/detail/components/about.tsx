import React from 'react';
import InfoItem from './info';
import CategoryTag from './catagory';
import SkillTag from './skill';

interface AboutSectionProps {
  postedDate: string;
  deadline: string;
  location: string;
  startDate: string;
  endDate: string;
  categories: string[];
  requiredSkills: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  postedDate,
  deadline,
  location,
  startDate,
  endDate,
  categories,
  requiredSkills
}) => {
  return (
    <section className=" text-xl flex flex-col items-start max-w-[294px]">
      <h2 className="self-stretch w-full text-2xl font-black leading-tight whitespace-nowrap text-slate-800">
        About
      </h2>
      <InfoItem icon="/images/plus.png" label="Posted On" value={postedDate} />
      <InfoItem icon="/images/fire.png" label="Deadline" value={deadline} />
      <InfoItem icon="/images/loc.png" label="Location" value={location} />
      <InfoItem icon="/images/st.png" label="Start Date" value={startDate} />
      <InfoItem icon="/images/end.png" label="End Date" value={endDate} />
      <hr className="self-stretch mt-5 w-full bg-zinc-200 min-h-[1px]" />
      <div className="flex flex-col mt-5 whitespace-nowrap">
        <h3 className="text-2xl font-black leading-tight text-slate-800">Categories</h3>
        <div className="flex gap-2 items-start mt-6 text-xs font-semibold leading-relaxed">
          {categories.map((category, index) => (
            <CategoryTag key={index} category={category} />
          ))}
        </div>
      </div>
      <hr className="self-stretch mt-5 w-full bg-zinc-200 min-h-[1px]" />
      <div className="flex flex-col items-start self-stretch py-0.5 mt-5 w-full text-base leading-relaxed text-indigo-600">
        <h3 className="text-2xl font-black leading-tight text-slate-800">Required Skills</h3>
        <div className="flex flex-wrap gap-2.5 self-stretch mt-2.5 w-full">
          {requiredSkills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;