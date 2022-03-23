import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
// logoimages
import logo from "../../images/logo.jpg";
import logoGif from "../../images/logo.gif";

// heading style
const Heading = styled(Typography)`
  color: #80868b;
  font-size: 2rem;
  margin-left: 25px;
  font-weight: 400;
  cursor: pointer;
`;
const VersionHeading = styled(Typography)`
  color: #80868b;
  font-size: 0.8rem;
  margin-left: 3px;
  font-weight: 400;
  padding-top: 13px;
  cursor: pointer;
`;

// header style
const Header = styled(AppBar)`
  z-index: 1201;
  background-color: #fff;
  height: 4.375rem;
  box-shadow: inset 0 -1px 0 0#dadce0;
`;
const HeaderBar = ({ open, handleDrawer, Toolbar }) => {
  const [logoimg, setLogoImg] = useState(logo);
  const logoHandler = (type) => {
    if (type === "hover") {
      setLogoImg(logoGif);
    } else if (type === "out") {
      setLogoImg(logo);
    }
  };
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={logoimg}
          onMouseOver={() => logoHandler("hover")}
          onMouseOut={() => logoHandler("out")}
          alt="logo"
          style={{ width: "4.5%", cursor: "pointer" }}
        />
        <Heading variant="h6" noWrap component="div">
          Trunote
        </Heading>
        <VersionHeading variant="h6" noWrap component="div">
          v 2.0
        </VersionHeading>
      </Toolbar>
    </Header>
  );
};
export default HeaderBar;
