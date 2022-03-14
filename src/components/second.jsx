import React, { useContext } from "react";
import NoteContext from "../contexts/noteContext";
const Second = () => {
  const noteContext = useContext(NoteContext);
  return (
    <NoteContext.Consumer>
      {() => (
        <React.Fragment>
          <h1>Second</h1>
          <p>{noteContext.note.text}</p>
          <button onClick={() => noteContext.handleSecondChangeState()}>
            Second change
          </button>
        </React.Fragment>
      )}
    </NoteContext.Consumer>

    // <React.Fragment>
    //   <h1>Second</h1>
    //   {noteContext.note.text}
    // </React.Fragment>
  );
};

export default Second;
