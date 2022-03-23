import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Form from "../Form/Form";
import PinnedNotes from "../Pinned/PinnedNotes";
import Note from "./Note";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Typography from "@mui/material/Typography";
import EmptyNotes from "./EmptyNotes";
const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Notes = () => {
  const { notes, pinnedNotes } = useContext(DataContext);

  return (
    <Box component="main" sx={{ width: "100%", p: 3, margin: "0px auto" }}>
      <DrawerHeader />
      <Form />
      {pinnedNotes.length > 0 ? (
        <>
          <Typography>Pinned</Typography>
          <PinnedNotes />
        </>
      ) : undefined}
      {notes.length > 0 ? (
        <>
          {pinnedNotes.length !== 0 && <Typography>Others</Typography>}
          <Grid container>
            {notes.map((note) => (
              <Grid key={note.id} item>
                <Note
                  key={note.id}
                  note={note}
                  sx={{ width: "80%", margin: "0 auto" }}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <EmptyNotes />
      )}
    </Box>
  );
};
export default Notes;
