import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

// my components
import HeaderBar from "./HeaderBar";
import { Toolbar } from "@mui/material";
import NavList from "./NavList";
import Notes from "../Notes/Notes";
import Archives from "../Archive/Archives";
import Deletes from "../Delete/Deletes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SwipeDrawer = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box component="main" sx={{ display: "flex" }}>
      <Router>
        {/* HEADER BAR */}
        <HeaderBar open={open} handleDrawer={handleDrawer} Toolbar={Toolbar} />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader></DrawerHeader>
          <NavList handleDrawer={handleDrawer} open={open} />
        </Drawer>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<Deletes />} />
        </Routes>
      </Router>
    </Box>
  );
};
export default SwipeDrawer;
