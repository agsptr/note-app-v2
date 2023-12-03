import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, createdAt, body, onDelete, onArchive, id }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />

      <div className="note-item__action">
        <NoteItemAction id={id} onDelete={onDelete} onArchived={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
