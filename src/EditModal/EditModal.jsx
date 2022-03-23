import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import TextField from "@mui/material/TextField";
import { SignalWifiConnectedNoInternet4TwoTone } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const EditModal = ({ open }) => {
  const {
    setShowEditmodal,
    editNote,
    setEditNote,
    setNotes,
    editType,
    setPinnedNotes,
  } = useContext(DataContext);
  const handleClose = () => {
    setShowEditmodal(false);
    if (editType == "notes") {
      setNotes((prev) => [editNote, ...prev]);
    }
    if (editType === "pinnotes") {
      setPinnedNotes((prev) => [editNote, ...prev]);
    }
  };
  const onTextChange = (e) => {
    setEditNote({
      ...editNote,
      [e.target.name]: e.target.value,
    });
    console.log(editNote);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            placeholder="Title"
            InputProps={{ disableUnderline: true }}
            sx={{ width: "100%" }}
            multiline
            variant="standard"
            maxRows={Infinity}
            name="heading"
            onChange={(e) => onTextChange(e)}
            value={editNote.heading}
          />
          <TextField
            placeholder="Take a note...."
            InputProps={{ disableUnderline: true }}
            sx={{ width: "100%" }}
            multiline
            variant="standard"
            maxRows={Infinity}
            name="text"
            onChange={(e) => onTextChange(e)}
            value={editNote.text}
          />

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
            onClick={handleClose}
          >
            close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default EditModal;
