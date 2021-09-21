import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { AuthProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);