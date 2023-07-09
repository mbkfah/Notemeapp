"use client";
import { Sidebar } from "./Sidebar";
import { Searchbar } from "../App/Searchbar";

export const DashboardTemplate = ({ children, onNewNotes, onSearchChange }) => {
  return (
    <main className="h-screen flex">
      <Sidebar onNewNotes={(color) => onNewNotes(color)} />
      <section className="w-[calc(100vw-90px)] p-6 space-y-8">
        <Searchbar onSearchChange={(text) => onSearchChange(text)} />
        <div>{children}</div>
      </section>
    </main>
  );
};
