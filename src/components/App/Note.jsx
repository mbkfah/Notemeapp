"use client ";
import React, { useState, useEffect } from "react";
import { Pen } from "lucide-react";
import { Trash } from "lucide-react";
import { Sun } from "lucide-react";
import { Save } from "lucide-react";
import { Ban } from "lucide-react";

const Note = ({ id, title, body, color }) => {
  const [onHover, setOnHover] = useState(false);
  const [IsNotes, setIsNotes] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [noteBody, setBody] = useState(body);
  const [noteColor, setColor] = useState(color);
  const [isPenHovered, setIsPenHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const [isSaveHovered, setIsSaveHovered] = useState(false);
  const [isBanHovered, setIsBanHovered] = useState(false);
  const MAX_CHARACTERS = 450; // Batasan jumlah karakter
  const [noteTitle, setNoteTitle] = useState(title);

  const truncatedBody =
    noteBody.length > MAX_CHARACTERS
      ? `${noteBody.slice(0, MAX_CHARACTERS)}...`
      : noteBody;

  const handlePenEnter = () => {
    setIsPenHovered(true);
  };

  const handlePenLeave = () => {
    setIsPenHovered(false);
  };

  const handleTrashEnter = () => {
    setIsTrashHovered(true);
  };

  const handleTrashLeave = () => {
    setIsTrashHovered(false);
  };

  const handleSaveEnter = () => {
    setIsSaveHovered(true);
  };

  const handleSaveLeave = () => {
    setIsSaveHovered(false);
  };

  const handleBanEnter = () => {
    setIsBanHovered(true);
  };

  const handleBanLeave = () => {
    setIsBanHovered(false);
  };

  useEffect(() => {
    const notesData = localStorage.getItem("notes");
    const notesJson = JSON.parse(notesData);
    // setIsNotes(notesJson);
    setIsNotes(true);
  }, [id]);

  const handleEditNote = () => {
    setIsEditing(true);
  };

  const handleSaveNote = () => {
    setIsEditing(false);
    const newBody = noteBody;

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, body: newBody, color: noteColor };
      }
      return note;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setBody(newBody);

    // Merekam key 'notes', value 'body', dan warna box yang sedang di-edit
    const currentNoteData = {
      notes: updatedNotes,
      body: newBody,
      color: noteColor,
      title: noteTitle,
    };

    localStorage.setItem("currentNote", JSON.stringify(currentNoteData));
  };

  const handleDeleteNote = () => {
    // Hapus catatan dari local storage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Hapus data box, id, body, dan color dari local storage
    localStorage.removeItem(`box-${id}`);
    localStorage.removeItem(`id-${id}`);
    localStorage.removeItem(`body-${id}`);
    localStorage.removeItem(`color-${id}`);
    localStorage.removeItem(`title-${id}`); // Hapus data title dari local storage

    // Hapus catatan dari state
    setBody("");
    setColor("");
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setNoteTitle(newTitle);
    localStorage.setItem(`title-${id}`, newTitle); // Simpan nilai title ke local storage
  };

  return (
    <div
      onPointerEnter={() => {
        setIsTrashHovered(true);
        setIsPenHovered(true);
        setIsSaveHovered(true);
        setIsBanHovered(true);
      }}
      onPointerLeave={() => {
        setIsTrashHovered(false);
        setIsPenHovered(false);
        setIsSaveHovered(false);
        setIsBanHovered(false);
      }}
      style={{ background: noteColor }}
      className="relative w-full h-80 p-4 bg-emerald-400 rounded-3xl text-lg tracking-tight font-medium shadow-md"
    >
      <div className="justify-center items-center">
        <div>
          <Sun
            color="#fff"
            size={30}
            className=" absolute bg-slate-600 rounded-xl p-0.5 m-1.5 "
          />
        </div>
        <div className="justify-between flex ">
          <div className="font-bold p-2 tracking-normal bg-slate-100 rounded-2xl w-full shadow-l">
            <div className="z-20 pl-8">
              <input
                type="text"
                value={noteTitle}
                onChange={handleTitleChange}
                className="outline-none bg-slate-100 w-full"
              />
            </div>
          </div>
        </div>
        <div
          id={`note-text-${id}`}
          className="justify-center  pt-4 p-3 pr-6 pl-0  items-center outline-none  text-slate-700 tracking-thight font-semibold absolute"
          contentEditable={isEditing}
          onInput={(e) => setBody(e.target.textContent)}
        >
          {truncatedBody}
        </div>
      </div>
      <div className="flex items-center gap-2 absolute bottom-4 right-4">
        <div
          className={`w-10 h-10 p-2 cursor-pointer transition duration-300 rounded-full flex justify-center items-center ${
            isSaveHovered
              ? "bg-blue-500 opacity-100 "
              : "bg-slate-100 opacity-10"
          }`}
          onMouseEnter={handleSaveEnter}
          onMouseLeave={handleSaveLeave}
          onClick={handleSaveNote}
        >
          <Save size={20} />
        </div>
        <div
          className={`w-10 h-10 p-2 cursor-pointer transition duration-300 rounded-full flex justify-center items-center ${
            isBanHovered
              ? "bg-blue-500 opacity-100 "
              : "bg-slate-100 opacity-10"
          }`}
          onMouseEnter={handleBanEnter}
          onMouseLeave={handleBanLeave}
          onClick={handleCancelEdit}
        >
          <Ban size={20} />
        </div>
        <div
          className={`w-10 h-10 p-2 cursor-pointer transition duration-300 rounded-full flex justify-center items-center ${
            isTrashHovered
              ? "bg-blue-500 opacity-100 "
              : "bg-slate-100 opacity-10"
          }`}
          onMouseEnter={handleTrashEnter}
          onMouseLeave={handleTrashLeave}
          onClick={handleDeleteNote}
        >
          <Trash size={20} />
        </div>
        <div>
          <div
            className={`w-10 h-10 p-2 cursor-pointer transition duration-300 rounded-full flex justify-center items-center ${
              isPenHovered
                ? "bg-blue-500 opacity-100 "
                : "bg-slate-100 opacity-10"
            }`}
            onMouseEnter={handlePenEnter}
            onMouseLeave={handlePenLeave}
            onClick={handleEditNote}
          >
            <Pen size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
