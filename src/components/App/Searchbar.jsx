"use client";

import { Search } from "lucide-react";
export const Searchbar = ({ onSearchChange }) => {
  return (
    <div className=" bg-slate-100 p-4 gap-3 flex items-center rounded-md">
      <Search color="#64748b" size={20} />
      <input
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search Something Here..."
      ></input>
    </div>
  );
};
