import React from "react";

function NoteItemAction({ id, onDelete, onArchive }) {
  return (
    <>
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        Archive
      </button>
    </>
  );
}

export default NoteItemAction;
