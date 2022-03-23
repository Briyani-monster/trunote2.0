import { Box, Grid } from "@mui/material";
import PinnedNote from "./PinnedNote";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const PinnedNotes = () => {
  const { pinnedNotes } = useContext(DataContext);
  return (
    <Box component="main" sx={{ width: "100%", p: 3, margin: "0px auto" }}>
      <Grid container>
        {pinnedNotes.map((archive) => (
          <Grid key={archive.id} item>
            <PinnedNote
              key={archive.id}
              note={archive}
              sx={{ width: "80%", margin: "0 auto" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default PinnedNotes;
