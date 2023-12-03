import React, { useState } from "react";
import "../styles/style.css"; // Pastikan Anda mengganti nama file sesuai dengan nama file CSS Anda

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const { title, body } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir yang telah diisi, misalnya, simpan ke database atau tampilkan
    console.log("Form submitted:", formData);
  };

  return (
    <div className="note-app__body">
      <form className="note-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul catatan ..."
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Isi catatan ..."
          name="body"
          value={body}
          onChange={handleChange}
        />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default NoteForm;
