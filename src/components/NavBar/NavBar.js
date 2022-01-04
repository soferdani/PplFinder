import React, { useEffect, useState  } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const NavBar = () => {
  const [value, setValue] = useState(0);
  const routes = ["/", "/favorites"];
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else {
      setValue(1);
    }

  },[])
  
  
  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} component={Link} to={routes[0]} />
        <Tab label="Favorites" index={1} component={Link} to={routes[1]} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
