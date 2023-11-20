import React, { useState } from "react";
import { Button } from "react-bootstrap";
import toastr from "toastr";

function NoteSection() {
  const [note, setNote] = useState("");

  const noteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNotesButtonClick=()=>{
    toastr.error("No database connected, notes will not be saved")
  }

  return (
    <div className="notes-textbox-padding">
      <h2>Note Section (No database connected, notes will not be saved)</h2>

      <textarea
        className="form-control"
        rows="5"
        value={note}
        onChange={noteChange}
        placeholder="No database connected, notes will not be saved"
      />
      <br />
      <Button variant="info" onClick={saveNotesButtonClick}>Save Notes </Button>
    </div>
  );
}

export default NoteSection;
