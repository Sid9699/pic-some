import { makeStyles } from "@material-ui/core";

export const useLoginStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.primary.light,
        },
    },
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        gap: 16
    },
    textColor: {
        color: theme.palette.primary.contrastText
    }
}))