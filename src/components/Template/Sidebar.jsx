"use client";

import { ClipboardSignature } from "lucide-react";
import { useState } from "react";
export const Sidebar = ({ onNewNotes }) => {
  const [onAddMode, setOnAddMode] = useState(false);

  return (
    <aside className="w-[90px] border-r-2 flex flex-col items-center p-8 bg-slate-100 z-20">
      <div className="font-bold p-2 text-blue-600">MeNote</div>
      <div>
        <div
          onClick={() => setOnAddMode(!onAddMode)}
          className="cursor-pointer border-2 border-blue-400 w-8 h-8 transition duration-300 rounded-full text-slate-700 flex justify-center items-center hover:text-blue-400 space-y-8"
        >
          <ClipboardSignature
            className={
              onAddMode
                ? "rotate-45 transition duration-300 "
                : "rotate-0 transition duration-300"
            }
          />
        </div>
        <div className="flex items-center gap-2 flex-col p-2">
          <div
            onClick={() => onNewNotes("#34d399")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-emerald-400 translate-y-4 transition duration-300 cursor-pointer hover:animate-spin"
                : "rounded-full  w-8 h-8 bg-emerald-200 -translate-y-8 -z-10  "
            }
          ></div>
          <div
            onClick={() => onNewNotes("#f00d7b")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-pink-400 translate-y-4 transition duration-300 cursor-pointer hover:animate-spin"
                : "rounded-full  w-8 h-8 bg-pink-200 -translate-y-8 -z-10 opacity-0"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#60a5fa")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-blue-400 translate-y-4 transition duration-300 cursor-pointer hover:animate-spin"
                : "rounded-full  w-8 h-8 bg-blue-200 -translate-y-8 -z-10 transition duration-0 opacity-0"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#fb923c")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-orange-400 translate-y-4 transition duration-300 cursor-pointer hover:animate-spin"
                : "rounded-full  w-8 h-8 bg-orange-200 -translate-y-8 -z-10 transition duration-0 opacity-0"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#818cf8")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-indigo-400 translate-y-4 transition duration-300 cursor-pointer hover:animate-spin"
                : "rounded-full  w-8 h-8 bg-indigo-200 -translate-y-8 -z-10 transition duration-0 opacity-0"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#fde047")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-yellow-400 translate-y-4 transition duration-300 cursor-pointer hover:animate-spin"
                : "rounded-full  w-8 h-8 bg-yellow-200 -translate-y-8 -z-10 transition duration-0 opacity-0"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#22d3ee")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-cyan-400 translate-y-4 transition duration-300 cursor-pointer hover:animate-spin"
                : "rounded-full  w-8 h-8 bg-cyan-200 -translate-y-8 -z-10 transition duration-0 opacity-0"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#a8a29e")}
            className={
              onAddMode
                ? "rounded  w-4 h-4 bg-stone-400 translate-y-4 transition duration-300 cursor-pointer "
                : "rounded-full  w-8 h-8 bg-stone-200 -translate-y-8 -z-10 transition duration-0 opacity-0"
            }
          ></div>
        </div>
      </div>
    </aside>
  );
};
