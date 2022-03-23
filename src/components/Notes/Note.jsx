import { CardContent, Card, CardActions, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/EditOutlined";
import Archive from "@mui/icons-material/ArchiveOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import Pin from "@mui/icons-material/PushPinOutlined";
import { styled } from "@mui/material/styles";
import EditModal from "../../EditModal/EditModal";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px 10px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  padding-top: 10px;
`;
const Note = ({ note, onPinned }) => {
  const {
    notes,
    setNotes,
    setArcheiveNotes,
    setDeleteNotes,
    pinnedNotes,
    setPinnedNotes,
    setShowEditmodal,
    setEditNote,
    setEditType,
  } = useContext(DataContext);
  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArcheiveNotes((prevnote) => [note, ...prevnote]);
  };
  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevnote) => [note, ...prevnote]);
  };
  const pinNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    if (pinnedNotes === 0) {
      onPinned();
    }
    setPinnedNotes((prevnote) => [note, ...prevnote]);
  };
  const EditNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setShowEditmodal(true);
    setEditNote(note);
    setEditType("notes");
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <EditIcon
          fontSize="small"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => EditNote(note)}
        />
        <Archive
          fontSize="small"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => archiveNote(note)}
        />
        <Delete
          fontSize="small"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => deleteNote(note)}
        />
        <Pin
          fontSize="small"
          sx={{
            position: "absolute",
            top: "0%",
            right: "0%",
            paddingTop: "5px",
            cursor: "pointer",
          }}
          onClick={() => pinNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};
export default Note;
