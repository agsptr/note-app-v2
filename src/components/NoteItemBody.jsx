import React from "react";

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{formatDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

const formatDate = (createdAt) => {
  return new Date(createdAt).toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default NoteItemBody;
