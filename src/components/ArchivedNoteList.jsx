import React from "react";
import NoteItem from "./NoteItem";

function ArchivedNoteList({ archivedNotes, onDelete }) {
  return (
    <div className="archived-notes-list">
      <h2>Arsip</h2>
      {archivedNotes.length === 0 ? (
        <p>Tidak ada catatan diarsipkan.</p>
      ) : (
        <div className="notes-list">
          {archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArchivedNoteList;
