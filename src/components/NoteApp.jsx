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
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    // Temukan catatan dengan ID yang sesuai
    const noteToArchive = this.state.notes.find((note) => note.id === id);

    // Pindahkan catatan ke rak archive
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
        archivedNotes: [
          ...prevState.archivedNotes,
          {
            ...noteToArchive,
            createdAt: +new Date(), // Simpan createdAt seperti ketika diarsipkan
          },
        ],
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      const newNote = {
        id: uuidv4(),
        title,
        body,
        createdAt: +new Date(),
        archived: false,
      };

      console.log("Tipe data title:", typeof title);
      console.log("Tipe data body:", typeof body);
      console.log("Tipe data crt:", typeof createdAt);
      console.log("Tipe data arciv:", typeof archived);

      // Log data baru sebelum ditambahkan ke state
      console.log("Data Catatan Baru:", newNote);

      return {
        notes: [...prevState.notes, newNote],
      };
    });
  }

  //   onAddNoteHandler({ title, body }) {
  //     this.setState((prevState) => {
  //       return {
  //         notes: [
  //           ...prevState.notes,
  //           {
  //             id: uuidv4(),
  //             title,
  //             createdAt: +new Date(),
  //             body,
  //             archived: false,
  //           },
  //         ],
  //       };
  //     });
  //   }

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes App</h1>
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
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
