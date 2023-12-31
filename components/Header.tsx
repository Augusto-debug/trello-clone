"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import fetchSuggestions from "@/utils/fetchSuggestions";
const Header = () => {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center  p-5 bg-gray-500/10 rounded-b-2xl ">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] -z-50 rounded-b-md filter blur-3xl opacity-50" />
        <Image
          src={"/images/trello_logo.png"}
          alt="trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
          priority
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 -mr-5" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="outline-none p-2"
            />
            <button type="submit" hidden />
          </form>
          <Avatar name="Augusto Cesar" round={true} size="50" color="#0055d1" />
        </div>
      </div>

      <div className="flex items-center justify-center py-2 px-5 md:py-5">
        <p className="flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1] ">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1]" />
          Gpt is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
