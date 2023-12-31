"use client";
import Position from "@/components/Position";
import jobData from "../data/data.json";
import { useStore } from "./store";
import { useState } from "react";
import Tabs from "@/components/Tabs";

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export default function Home() {
  const data = useStore((state) => state.data);
  const activeData = useStore((state) => state.activeTab);
  const clearData = useStore((state) => state.clearActiveTab);

  return (
    <>
      {" "}
      {activeData.length > 0 && (
        <div className="flex  justify-center   ">
          <div className=" max-md:py-1  max-[350px]:pr-[1rem] max-[330px]:px-[0.5rem]  lg:w-[70%] md:w-[85%]  max-[320px]:w-[80%] bg-lightGrayishCyanFilterTablets min-h-[3rem] w-[70%] rounded-[1rem] mt-[-1rem] flex justify-between items-center">
            {" "}
            <div className=" md:flex grid  max-sm:grid-cols-2 max-md:grid-cols-3 grid-rows-2 max-[350px]:pr-[2rem]   items-center md:gap-[1rem] gap-[0.6rem]">
              {activeData.map((data) => (
                <Tabs closable={true}>{data}</Tabs>
              ))}
            </div>
            <div
              className="items-end md:pr-3 pr-2  md:text-[1rem] text-[0.7rem] text-desaturatedDarkCyan font-bold cursor-pointer"
              onClick={clearData}
            >
              Clear
            </div>
          </div>  
        </div>
      )}
      <div className="flex flex-col justify-center items-center">
        {data.map((job) => {
          const rightContent = [
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
          ];

          // Check if all elements in activeData are present in rightContent
          const shouldRenderPosition = activeData.every((item) =>
            rightContent.includes(item)
          );

          if (shouldRenderPosition) {
            return (
              <Position
                key={job.id}
                id={job.id}
                company={job.company}
                logo={job.logo}
                isNew={job.new}
                isFeatured={job.featured}
                position={job.position}
                role={job.role}
                level={job.level}
                postedAt={job.postedAt}
                contract={job.contract}
                location={job.location}
                languages={job.languages}
                tools={job.tools}
              />
            );
          }

          return null; // Return null if the condition is not met
        })}
      </div>
    </>
  );
}
