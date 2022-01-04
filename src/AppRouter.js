import React, {useState} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import Favorites from "./pages/Favorites";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { UserContext } from "UserContext";

const AppRouter = () => {
  const [likedUsers, setLikedUsers] = useState([]);

  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <UserContext.Provider value={{likedUsers,setLikedUsers}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </UserContext.Provider>
        </Switch> 
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
