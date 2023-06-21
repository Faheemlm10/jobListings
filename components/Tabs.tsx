interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <div className=" cursor-pointer flex text-desaturatedDarkCyan font-bold bg-lightGrayishCyanBg py-1 px-2 rounded-[.5rem]">
      {children}
    </div>
  );
};

export default Tabs;
