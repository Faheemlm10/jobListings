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
        <div className="flex">
          <div
            ref={tabRef}
            className="transition-opacity duration-300 ease-in-out opacity-0 cursor-pointer flex text-desaturatedDarkCyan font-bold bg-lightGrayishCyanBg py-1 px-2 ml-[1rem] rounded-l-[.5rem] h-[2rem] "
            onClick={handleClick}
          >
            {children}
          </div>

          <div className="cursor-pointer h-[2rem] bg-desaturatedDarkCyan flex items-center justify-center w-[1.5rem] rounded-r-[.5rem]   ">
            <Image src={Remove} alt="close" onClick={removeTab} />
          </div>
        </div>
      )}
      {!closable && (
        <div className="flex">
          <div
            ref={tabRef}
            className="transition-opacity duration-300 ease-in-out opacity-0 cursor-pointer flex text-desaturatedDarkCyan font-bold bg-lightGrayishCyanBg py-1 px-2 ml-[1rem] rounded-[.5rem] h-[2rem] "
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
