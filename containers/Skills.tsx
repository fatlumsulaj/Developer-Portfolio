import React from "react";
import Image from "next/image";
type SkillProps = {
  children: React.ReactNode;
};

const Skill = ({ children }: SkillProps) => {
  return (
    <div className="w-full sm:w-[479px] h-[250px] border-[1px] border-gray-400 border-opacity-50 2xl:border-none rounded-xl">
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="max-container container-padding flex flex-wrap justify-center border-0 2xl:border-[1px] border-gray-400 border-opacity-50 rounded-2xl mt-[-140px] bg-white">
      <Skill>
        <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto mt-20">
          <Image
            src="/laptop-code-solid.svg"
            alt="web development"
            width={50}
            height={50}
          />
        </div>
        <h3 className="heading3 text-center">Web Developer</h3>
      </Skill>
      <Skill>
        <div className="w-full h-full border-0 2xl:border-x-[1px] lg:border-gray-400 lg:border-opacity-50 pt-20">
          <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto">
            <Image
              src="/wand-magic-sparkles-solid.svg"
              alt="design"
              width={50}
              height={50}
            />
          </div>
          <h3 className="heading3 text-center">Designer</h3>
        </div>
      </Skill>
      <Skill>
        <div className="flex flex-row items-center justify-center green-background p-5 rounded-full w-[75px] h-[75px] mx-auto mt-20">
          <Image
            src="/magnifying-glass-chart-solid.svg"
            alt="Suchmaschinen Optimierung"
            width={50}
            height={50}
          />
        </div>
        <h3 className="heading3 text-center">SEO Expert</h3>
      </Skill>
    </section>
  );
};

export default Skills;
