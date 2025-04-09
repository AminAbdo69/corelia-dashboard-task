import React from "react";
import { Search } from "../../../assets/icons";
import MyPic from "../../../assets/images/MyPicture.jpeg";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full h-12 bg-white   shadow-sm px-10 flex items-center justify-between">
      <div className="w-full max-w-md relative mx-auto">
        <input
          type="text"
          placeholder="input search text "
          className="w-full pl-6 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Search className="absolute pl-2 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-8 h-8 border-l border-gray-200" />
      </div>
      <div>
        <img src={MyPic} alt="My Picture" className="w-8 h-8 rounded-md" />
      </div>
    </header>
  );
};
