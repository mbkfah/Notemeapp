"use client";

import { useState } from "react";
import { DashboardTemplate } from "../Template/DashboardTemplate";
import { notes } from "@/lib/dummy/notes";
import Note from "./Note";

export const Editor = () => {
  const [notesData, setNotesData] = useState(notes);
  const [searchText, setSearchText] = useState("");
  console.log(notesData);

  const createNote = (color) => {
    const newNotesData = [...notesData];
    const notesLength = newNotesData.length;
    newNotesData.push({
      id: notesLength + 1,
      body: "Note baru",
      color: color,
    });
    setNotesData(newNotesData);
  };
  return (
    <DashboardTemplate
      onNewNotes={(color) => createNote(color)}
      onSearchChange={(text) => setSearchText(text)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notesData
          .filter((item) => {
            const body = item.body.toLocaleLowerCase();
            // const title = item.body.toLocaleLowerCase();
            const search = searchText.toLocaleLowerCase();
            return body.includes(search);
            // return title.includes(search);
          })
          .map(({ id, body, color }) => {
            return <Note key={id} body={body} color={color} />;
          })}
      </div>
    </DashboardTemplate>
  );
};
