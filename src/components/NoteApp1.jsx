import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddnoteHandler({ title, createdAt, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt,
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <h1>Aplikasi Note</h1>
        <h2>Tambah Note</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Daftar note</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
