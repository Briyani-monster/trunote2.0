import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Archive from "./Archive";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Archives = () => {
  const { archeiveNotes } = useContext(DataContext);
  return (
    <Box component="main" sx={{ width: "100%", p: 3, margin: "0px auto" }}>
      <DrawerHeader />
      <Grid container>
        {archeiveNotes.map((archive) => (
          <Grid key={archive.id} item>
            <Archive
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
export default Archives;
