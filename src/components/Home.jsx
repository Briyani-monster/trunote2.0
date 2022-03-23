import SwipeDrawer from "./SwipeDrawer/SwipeDrawer";
import Notes from "./Notes/Notes";
import EditModal from "../EditModal/EditModal";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Box } from "@mui/material";
const Home = () => {
  const { showEditmodal } = useContext(DataContext);
  return (
    <Box styles={{ display: "flex", width: "100%" }}>
      <EditModal open={showEditmodal} />
      <SwipeDrawer />
      {/* <Notes /> */}
    </Box>
  );
};
export default Home;
