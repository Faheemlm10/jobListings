import { useEffect, useRef } from "react";
import { useStore } from "../app/store";
import Image from "next/image";
import Remove from "../images/icon-remove.svg";

interface TabsProps {
  children: React.ReactNode;
  closable: boolean;
}

const Tabs: React.FC<TabsProps> = ({ children, closable }) => {
  const activeTab = useStore((store) => store.activeTab);
  const removeFromActiveTab = useStore((store) => store.removeFromActiveTab);
  const appendToActiveTab = useStore((store) => store.appendToActiveTab);

  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      tabRef.current.classList.add("opacity-100");
    }
  }, []);

  const handleClick = () => {
    appendToActiveTab(children?.toString() ?? "");
  };

  const removeTab = () => {
    removeFromActiveTab(children?.toString() ?? "");
  };

  return (
    <>
      {closable && (
        <div className="flex shrink-0 ">
          <div
            ref={tabRef}
            className="  shrink-0 transition-opacity duration-300 ease-in-out opacity-0 cursor-pointer flex items-center text-desaturatedDarkCyan font-bold bg-lightGrayishCyanBg md:py-1 px-2 max-[325px]:px-1 ml-[1rem] md:rounded-l-[.5rem] rounded-l-[.3rem] md:h-[2rem] lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] max-[325px]:h-[1.5rem] "
            onClick={handleClick}
          >
            {children}
          </div>

          <div className=" max-[325px]:h-[1.5rem] shrink-0 cursor-pointer h-[2rem] bg-desaturatedDarkCyan flex items-center justify-center w-[1rem] md:w-[1.5rem] md:rounded-r-[.5rem]  rounded-r-[.3rem]   ">
            <Image src={Remove} alt="close" onClick={removeTab} />
          </div>
        </div>
      )}
      {!closable && (
        <div className="flex justify-around   ">
          <div
            ref={tabRef}
            className=" flex  justify-between  xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[1rem] text-[0.8rem] transition-opacity duration-300 ease-in-out opacity-0 cursor-pointer text-desaturatedDarkCyan font-bold bg-lightGrayishCyanBg py-1 px-2   rounded-[.5rem] whitespace-nowrap sm:w-auto  "
            onClick={handleClick}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
