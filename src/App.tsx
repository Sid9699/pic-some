import { NavBar, MainContent, Login, SignUp } from './components';
import { Route, Switch, useHistory } from "react-router-dom";
import { AuthContext } from './contexts';
import { useContext, useEffect } from 'react';
import { useGlobalStyles } from "./useGlobalStyles";

const App = () => {

  const { user } = useContext(AuthContext);
  const history = useHistory();

  useGlobalStyles();

  useEffect(() => {
    console.log(user)
    if (!user) {
      if (history.location.pathname !== "/signup") {
        history.push("/login");
      }
    } else {
      history.push("/");
    }
  }, [history, user])

  return <Switch>
    <Route exact path="/">
      <NavBar></NavBar>
      <MainContent></MainContent>
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signUp">
      <SignUp />
    </Route>
  </Switch>;

}

export default App;