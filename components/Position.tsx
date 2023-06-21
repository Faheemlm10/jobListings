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
  console.log(logo);
  return (
    <div className=" mt-[3rem] w-[70%] h-[10rem] bg-lightGrayishCyanFilterTablets rounded-[1rem] flex justify-between items-center">
      <div className="flex gap-[2rem]">
        <div className=" ml-[2rem]">
          <Image
            src={require(`${logo}`)}
            alt="logo"
            className="h-[6rem] w-[6rem]"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-[1rem]">
            <div className="text-desaturatedDarkCyan font-bold"> {company}</div>
            <div className="flex gap-[1rem] ">
              {isNew && (
                <div className="font-bold text-[0.8rem]  px-[0.5rem]  rounded-[0.7rem] flex justify-center items-center text-center text-white bg-desaturatedDarkCyan">
                  NEW!
                </div>
              )}
              {isFeatured && (
                <div className="flex font-bold  items-center justify-center text-[0.8rem]   px-[.5rem]  rounded-[0.7rem]  text-center text-white bg-black">
                  <span> FEATURED</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-black font-bold text-[1.4rem]">{position}</div>
          <div className="flex gap-[1rem] items-center text-darkGrayishCyan text-[0.9rem]">
            <div>{postedAt}</div>
            <div className="  mb-[0.5rem]">.</div>
            <div>{contract}</div>
            <div className="  mb-[0.5rem]">.</div>
            <div>{location}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mr-8">
        {" "}
        {rightContent.map((value, index) => (
          <Tabs key={index}>{value}</Tabs>
        ))}
      </div>
    </div>
  );
};

export default Position;
