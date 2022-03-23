import { CardContent, Card, CardActions, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/EditOutlined";
import Archive from "@mui/icons-material/ArchiveOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import Pin from "@mui/icons-material/PushPin";
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
const PinnedNote = ({ note }) => {
  const {
    setNotes,
    setArcheiveNotes,
    setDeleteNotes,
    pinnedNotes,
    setPinnedNotes,
    notes,
    setShowEditmodal,
    setEditNote,
    setEditType,
  } = useContext(DataContext);
  const ArchiveNote = (note) => {
    const updatedNotes = pinnedNotes.filter((data) => data.id !== note.id);
    setPinnedNotes(updatedNotes);
    setArcheiveNotes((prevnote) => [note, ...prevnote]);
  };
  const deleteNote = (note) => {
    const updatedNotes = pinnedNotes.filter((data) => data.id !== note.id);
    setPinnedNotes(updatedNotes);
    setDeleteNotes((prevnote) => [note, ...prevnote]);
  };
  const unpinNote = (note) => {
    const updatedNotes = pinnedNotes.filter((data) => data.id !== note.id);

    setPinnedNotes(updatedNotes);
    setNotes((prevnote) => [note, ...prevnote]);
  };
  const EditNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setPinnedNotes(updatedNotes);
    setShowEditmodal(true);
    setEditNote(note);
    setEditType("pinnotes");
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography
          variant="body2"
          paragraph
          style={{ whiteSpace: "pre-wrap" }}
        >
          {note.heading}
        </Typography>
        <Typography
          variant="body2"
          paragraph
          noWrap
          style={{ whiteSpace: "pre-wrap" }}
        >
          {note.text}
        </Typography>
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
          onClick={() => ArchiveNote(note)}
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
          onClick={() => unpinNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};
export default PinnedNote;
