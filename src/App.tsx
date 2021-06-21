import { NavBar, MainContent } from './components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

const App = () => {
  return <Router>
    <MuiThemeProvider theme={theme}>
      <NavBar></NavBar>
      <MainContent></MainContent>
    </MuiThemeProvider>
  </Router>;
}

export default App;