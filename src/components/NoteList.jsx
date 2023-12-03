import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <>
      <h2>Daftar Catatan</h2>
      {notes.length === 0 ? (
        <p>Tidak ada catatan.</p>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default NoteList;
