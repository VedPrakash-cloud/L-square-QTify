import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import feedback from "../assets/feedback.svg";
import logo from "../assets/logo.svg";
import Button from "@mui/material/Button"
import classes from './Navbar.module.css'


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "#121212",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  top: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderLeft: "1px solid",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  return (
    <Box className={classes.container}>
      <div className={classes.first}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes.second}>
        <Search>
              <StyledInputBase
                placeholder="Search a album of your choice"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
      </div>
      <Button className={classes.feedback}>
        <img src={feedback} alt="feedback" />
      </Button>
    </Box>
  );
}
