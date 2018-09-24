import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

import * as styles from "./style.scss";

function NavBar() {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={styles.link}>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="title" color="inherit" className={styles.grow}>
            Dean&#39;s Crisis Management System
          </Typography>
          <Link to="/report" className={styles.link}>
            <Button color="inherit">Report</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
