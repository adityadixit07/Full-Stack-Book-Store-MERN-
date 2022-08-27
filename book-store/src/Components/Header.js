import React, { useState } from "react";
import { AppBar, Tab, Toolbar, Typography, Tabs } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:'#00112b'}} position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
          </Typography>
          <Tabs
          sx={{ml:'auto'}}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add book" />
            <Tab LinkComponent={NavLink} to="books" label="Books" />
            <Tab LinkComponent={NavLink} to="about" label="About us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
