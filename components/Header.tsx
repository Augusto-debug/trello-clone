import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="flex justify-between">
      <Image
        src={"/images/trello_logo.png"}
        alt="trello logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <form className="flex items-center border-2 border-gray-500 rounded">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 " />
        <input type="text" placeholder="Search" className="outline-none pl-5" />
      </form>
    </header>
  );
};

export default Header;
