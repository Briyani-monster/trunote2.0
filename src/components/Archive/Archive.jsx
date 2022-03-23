import { CardContent, Card, CardActions, Typography } from "@mui/material";
import UnArchive from "@mui/icons-material/UnarchiveOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
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
const Archive = ({ note }) => {
  const { setNotes, archeiveNotes, setArcheiveNotes, setDeleteNotes } =
    useContext(DataContext);
  const unArchiveNote = (note) => {
    const updatedNotes = archeiveNotes.filter((data) => data.id !== note.id);
    setArcheiveNotes(updatedNotes);
    setNotes((prevnote) => [note, ...prevnote]);
  };
  const deleteNote = (note) => {
    const updatedNotes = archeiveNotes.filter((data) => data.id !== note.id);
    setArcheiveNotes(updatedNotes);
    setDeleteNotes((prevnote) => [note, ...prevnote]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <UnArchive
          fontSize="small"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => unArchiveNote(note)}
        />
        <Delete
          fontSize="small"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};
export default Archive;
