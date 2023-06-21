  'use client'
  import Position from "@/components/Position";
  import jobData from "../data/data.json";
  import { useState } from "react";

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
    const [data, setData] = useState<Job[]>(jobData);
    console.log(data);

    return (
      <>
        <div className="flex flex-col justify-center items-center">
          {data.map((job) => (
            <Position
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
          ))}
        </div>
      </>
    );
  }
