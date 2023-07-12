import React, { useState, useEffect } from "react";
import Note from "./Note";

export const LocalComp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Ambil catatan dari local storage saat komponen dimuat
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleEditNote = (id, newBody) => {
    // Update catatan di local storage
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, body: newBody };
      }
      return note;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (id) => {
    // Hapus catatan dari local storage
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          body={note.body}
          color={note.color}
          handleEdit={handleEditNote}
          handleDelete={handleDeleteNote}
        />
      ))}
    </div>
  );
};
