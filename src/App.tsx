import { NavBar, MainContent, Login } from './components';
import { Route, Switch, useHistory } from "react-router-dom";
import { AuthContext } from './contexts';
import React from 'react';

const App = () => {

  const { user } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    if (!user) {
      history.push("/login");
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

    </Route>
  </Switch>;

}

export default App;