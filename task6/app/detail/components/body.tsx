import React from "react";
import Description from "./description";
import Responsibilities from "./responsiblity";
import IdealCandidate from "./idealcand";
import WhenAndWhere from "./whenandwhere";


interface MyComponentProps {
    description : string;
    location :string
    traits : string[]
    age : string
    gender : string
    responsiblity : string[]
}


const MyComponent: React.FC<MyComponentProps> = ({description, location, traits,gender,age ,responsiblity}) => {
  return (
    <main className="flex flex-col py-12 max-w-[815px]">
      <Description text={description}/>
      <Responsibilities resp={responsiblity} />
      <IdealCandidate 
        traits={traits}
        gender={gender}
        age = {age}
      />
      <WhenAndWhere  text={location} />
    </main>
  );
};

export default MyComponent;