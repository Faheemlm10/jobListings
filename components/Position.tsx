"use client";
import Image from "next/image";
import Tabs from "./Tabs";
interface PositionProps {
  id: number;
  logo: string;
  company: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const Position: React.FC<PositionProps> = ({
  id,
  logo,
  company,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const rightContent = [role, level, ...languages, ...tools];
  return (
    <div className=" relative mt-[3rem] lg:w-[70%] md:w-[85%] md:h-[10rem] h-[15rem] w-[70%] max-[350px]:w-auto max-[350px]:mx-[1rem] max-[350px]:px-[1rem] bg-lightGrayishCyanFilterTablets rounded-[1rem]  flex flex-col justify-evenly  md:flex-row md:justify-between items-center  ">
      <div className="flex max-md:w-[100%] xl:gap-[2rem] lg:gap-[1rem] md:gap-[0.8rem] items-center max-md:self-start max-md:px-[1rem]">
        <div className=" max-md:absolute top-[-10%] left-[1rem] lg:ml-[2rem] md:ml-[1rem]  xl:h-[6rem] xl:w-[6rem] lg:h-[5rem] lg:w-[5rem] md:h-[4rem] md:w-[4rem] h-[3.5rem] w-[3.5rem] z-50  ">
          <Image src={require(`${logo}`)} alt="logo" className="" />
        </div>
        <div className="flex flex-col w-[100%]   max-md:mt-[1rem]">
          <div className="flex gap-[1rem] max-md:justify-between ">
            <div className="text-desaturatedDarkCyan font-bold  lg:text-[1rem] md:text-[0.8rem] text-[1rem] ">
              {" "}
              {company}
            </div>
            <div className="flex gap-[1rem] ">
              {isNew && (
                <div className="font-bold xl:text-[0.8rem]  xl:px-[0.5rem] text-[0.6rem] px-[0.3rem]  rounded-[0.7rem] flex justify-center items-center text-center text-white bg-desaturatedDarkCyan">
                  NEW!
                </div>
              )}
              {isFeatured && (
                <div className="flex font-bold  items-center justify-center xl:text-[0.8rem]  xl:px-[0.5rem] text-[0.6rem] px-[0.3rem]   rounded-[0.7rem]  text-center text-white bg-black">
                  <span> FEATURED</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-black font-bold xl:text-[1.4rem] lg:text-[1.1rem]">
            {position}
          </div>
          <div className="flex xl:gap-[1rem] md:gap-[0.8rem] sm:gap-[1rem] gap-[0.6rem]  items-center text-darkGrayishCyan xl:text-[0.9rem] sm:text-[0.8rem] text-[0.7rem] ">
            <div>{postedAt}</div>
            <div className="  mb-[0.5rem]">.</div>
            <div>{contract}</div>
            <div className="  mb-[0.5rem]">.</div>
            <div>{location}</div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3  md:flex  gap-[0.5rem] md:gap-[0.5rem] lg:gap-[0.6rem] xl:gap-[1rem]  xl:pr-[2rem] md:pr-[1rem] ">
        {" "}
        {rightContent.map((value, index) => (
          <Tabs closable={false} key={index}>
            {value}
          </Tabs>
        ))}
      </div>
    </div>
  );
};

export default Position;
