import React, { useContext } from "react";
import Second from "./second";

import NoteContext from "../contexts/noteContext";

const First = () => {
  const noteContext = useContext(NoteContext);
  return (
    <React.Fragment>
      <h1>First</h1>
      <button onClick={() => noteContext.handleChangeState()}>
        First change state
      </button>
      {/* <p>{noteContext.note.text}</p> */}
      <Second />
    </React.Fragment>
  );
};

export default First;
