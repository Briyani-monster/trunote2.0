import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteNote from "./DeleteNote";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Deletes = () => {
  const { deleteNotes } = useContext(DataContext);
  return (
    <Box component="main" sx={{ width: "100%", p: 3, margin: "0px auto" }}>
      <DrawerHeader />
      <Grid container>
        {deleteNotes.map((note) => (
          <Grid key={note.id} item>
            <DeleteNote
              key={note.id}
              note={note}
              sx={{ width: "80%", margin: "0 auto" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Deletes;
