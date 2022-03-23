import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Lightbulb from "@mui/icons-material/LightbulbOutlined";
import Archive from "@mui/icons-material/ArchiveOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
function RouteAddress() {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/") {
    return 0;
  } else if (location.pathname === "/archive") {
    return 1;
  } else if (location.pathname === "/delete") {
    return 2;
  }
}

const NavList = ({ open, handleDrawer }) => {
  const active = RouteAddress();
  const [activeIndex, SetActiveIndex] = useState(active);
  const navList = [
    { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
    { id: 2, name: "Archive", icon: <Archive />, route: "/archive" },
    { id: 3, name: "Trash", icon: <Delete />, route: "/delete" },
  ];
  return (
    <List
      onMouseOver={open === false ? handleDrawer : undefined}
      onMouseOut={handleDrawer}
    >
      {navList.map((list, index) => (
        <Link
          to={list.route}
          style={{
            textDecoration: "none",
            display: "flex",
            color: "inherit",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => SetActiveIndex(index)}
        >
          <ListItemButton
            className={activeIndex === index ? "active" : ""}
            onClick={() => SetActiveIndex(index)}
            key={list.id}
            sx={{
              minHeight: 48,

              justifyContent: open ? "initial" : "center",
              borderRadius: "0 50px 50px 0",
              "&.active": {
                backgroundColor: open ? "#feefc3" : "",
                borderRadius: open ? "0 50px 50px 0" : "",
              },

              px: 2.5,
            }}
          >
            <ListItemIcon
              className={activeIndex === index ? "active" : ""}
              sx={{
                "&.active": {
                  backgroundColor: open ? "" : "#feefc3",
                },
                padding: 1,
                borderRadius: open ? "0" : "100%",

                minWidth: 0,
                mr: open ? 3 : "auto",
              }}
            >
              {list.icon}
            </ListItemIcon>
            <ListItemText
              primary={list.name}
              sx={{ display: !open ? "none" : "flex" }}
            />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};
export default NavList;
