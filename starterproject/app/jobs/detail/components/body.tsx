import React from "react";
import Description from "./description";
import Responsibilities from "./responsiblity";
import IdealCandidate from "./idealcand";
import WhenAndWhere from "./whenandwhere";


interface MyComponentProps {
    description : string;
    location :string

    requirements : string
    responsiblity : string;
    idealcand : string;
    whenAndWhere : string
}


const MyComponent: React.FC<MyComponentProps> = ({description, location, responsiblity, idealcand, requirements, whenAndWhere}) => {
  return (
    <main className="flex flex-col py-12 max-w-[815px]">
      <Description text={description}/>
      <Responsibilities resp={responsiblity} />
      <IdealCandidate 
        requirements={requirements}
        idealcand = {idealcand}
      />
      <WhenAndWhere  text={whenAndWhere} />
    </main>
  );
};

export default MyComponent;