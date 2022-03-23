import { Box, TextField, ClickAwayListener, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState, useRef, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";
const Container = styled(Box)`
  display: flex;
  width: 600px;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 30px;
  position: relative;
`;
const note = {
  id: "",
  heading: "",
  text: "",
};
const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const containerRef = useRef();
  const { notes, setNotes } = useContext(DataContext);
  const onTextAreaClick = () => {
    setShowTextField(true);
    // USING REF TO CHANGE VIRTUAL DOM ELEMENT DYNAMICALLY
    containerRef.current.style.minHeight = "70px";
    containerRef.current.style.paddingBottom = "30px";
  };
  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    containerRef.current.style.paddingBottom = "10px";
    if (
      addNote.heading.trim().length !== 0 ||
      addNote.text.trim().length !== 0
    ) {
      setAddNote({ ...note, id: uuid() });
      setNotes((prevarray) => [addNote, ...prevarray]);
    }
  };
  const onTextChange = (e) => {
    if (e.target.value.trim().length !== 0) {
      let changedNote = { ...addNote, [e.target.name]: e.target.value };
      setAddNote(changedNote);
    }
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={(e) => onTextChange(e)}
            sx={{ width: "100%", marginBottom: "10px" }}
            name="heading"
            value={addNote.heading}
          />
        )}

        <TextField
          placeholder="Take a note...."
          variant="standard"
          InputProps={{ disableUnderline: true }}
          sx={{ width: "100%" }}
          multiline
          maxRows={Infinity}
          onChange={(e) => onTextChange(e)}
          onClick={onTextAreaClick}
          name="text"
          value={addNote.text}
        />
        {showTextField && (
          <Button
            variant="text"
            sx={{
              position: "absolute;",
              bottom: "0",
              right: "0",
              color: "#232323",
              textTransform: "capitalize",
              "&:hover": {
                background: "transparent",
                fontWeight: "bold",
              },
            }}
            onClick={handleClickAway}
          >
            close
          </Button>
        )}
      </Container>
    </ClickAwayListener>
  );
};
export default Form;
