import { CardContent, Card, CardActions, Typography } from "@mui/material";
import Restore from "@mui/icons-material/RestoreFromTrashOutlined";
import Delete from "@mui/icons-material/DeleteForeverOutlined";
import Pin from "@mui/icons-material/PushPinOutlined";
import { styled } from "@mui/material/styles";
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
const DeleteNote = ({ note }) => {
  const { setNotes, setArcheiveNotes, deleteNotes, setDeleteNotes } =
    useContext(DataContext);
  const RestoreNote = (note) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNotes);
    setNotes((prevnote) => [note, ...prevnote]);
  };
  const deleteNote = (note) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => deleteNote(note)}
        />
        <Restore
          fontSize="small"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => RestoreNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};
export default DeleteNote;
