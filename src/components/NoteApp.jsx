import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import { v4 as uuidv4 } from "uuid";
import ArchivedNoteList from "./ArchivedNoteList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const archivedNotes = this.state.archivedNotes.filter(
      (note) => note.id !== id
    );
    this.setState({ notes, archivedNotes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      );

      const archivedNote = prevState.notes.find((note) => note.id === id);

      return {
        notes: updatedNotes,
        archivedNotes: [...prevState.archivedNotes, archivedNote],
      };
    });
  }

  onAddNoteHandler({ title, body, archived }) {
    this.setState((prevState) => {
      const newNote = {
        id: uuidv4(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };

      return {
        notes: [...prevState.notes, newNote],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes App</h1>
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes.filter((note) => !note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <ArchivedNoteList
            archivedNotes={this.state.archivedNotes}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
