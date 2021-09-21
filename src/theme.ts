import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ea453c',
            light: '#f47b6e'
        },
        secondary: {
            main: '#ace6ec',
            light: '#effbfe'
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});