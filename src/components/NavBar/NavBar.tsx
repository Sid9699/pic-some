import { AppBar, Toolbar as MuitoolBar, Typography, withStyles } from "@material-ui/core";
import React from "react";

const Toolbar = withStyles({
    root: {
        justifyContent: "space-between"
    }
})(MuitoolBar)

export const NavBar: React.FC = (props) => {
    return <AppBar data-testid="ps-navbar">
        <Toolbar>
            <Typography variant="h5">Pic Some</Typography>
            {props.children}
        </Toolbar>
    </AppBar>;
}