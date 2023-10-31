"use client";
import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center  p-5 bg-gray-500/10 rounded-b-2xl ">
        <Image
          src={"/images/trello_logo.png"}
          alt="trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain ml-5"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 -mr-5" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none p-2"
            />
            <button type="submit" hidden />
          </form>
          <Avatar name="Augusto Cesar" round={true} size="50" color="#0055d1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
