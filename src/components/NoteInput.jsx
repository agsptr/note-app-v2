import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      createdAt: "",
      body: "",
      archived: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    console.log("createdAt sebelum setState:", this.state.createdAt);
    this.props.addNote({ ...this.state, archived: false });
    this.setState({
      title: "",
      createdAt: "",
      body: "",
      archived: false,
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Tambah Catatan</h2>
        <input
          type="text"
          placeholder="Judul catatan ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          type="text"
          placeholder="Isi catatan ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
