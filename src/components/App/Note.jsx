"use client ";

import react, { useState } from "react";
import { Pen } from "lucide-react";
import { Sun } from "lucide-react";
export const Note = ({ body, color }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      onPointerEnter={() => setOnHover(true)}
      onPointerLeave={() => setOnHover(false)}
      style={{ background: color }}
      className=" relative w-full h-60 bg-emerald-400 p-6 rounded-xl text-lg tracking-tight font-medium "
    >
      <div className="flex justify-between">
        <div>
          <Sun color="white" size={30} />
        </div>
        <div className="p-2 text-slate-800 shadow-xl rounded-md border-2 border-slate-700 ">
          {body}
        </div>
      </div>

      <div
        className={
          onHover
            ? "absolute bottom-4 right-4 w-10 h-10 p-2 opacity-100 transition duration-300 bg-slate-900 text-slate-400 rounded-full flex justify-center items-center "
            : "absolute bottom-4 right-4 w-10 h-10 p-2 opacity-0 transition duration-300 bg-slate-900 text-slate-400 rounded-full flex justify-center items-center "
        }
      >
        <Pen size={20} />
      </div>
    </div>
  );
};
