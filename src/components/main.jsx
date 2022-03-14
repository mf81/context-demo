import React, { useState, useEffect } from "react";
import First from "./first";
import NoteContext from "../contexts/noteContext";

const Main = () => {
  const [note, setNote] = useState({});
  const [error, setError] = useState();

  const getNote = async () => {
    try {
      const data = {
        text: "Text send to components by React Context",
      };
      setNote(data);
    } catch (error) {
      setError("Could not get note!");
    }
  };
  useEffect(() => getNote(), []);

  const handleChangeState = () => {
    setNote({ text: "First text updated in components by React Context" });
  };

  const handleSecondChangeState = () => {
    setNote({ text: "Second text updated in components by React Context" });
  };

  return (
    <React.Fragment>
      <h1>Main</h1>
      {note.text}
      {error}

      <NoteContext.Provider
        value={{ note: note, handleChangeState, handleSecondChangeState }}
      >
        <First />
      </NoteContext.Provider>
    </React.Fragment>
  );
};

export default Main;
