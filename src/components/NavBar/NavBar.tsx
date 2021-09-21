import { AppBar, Toolbar as MuitoolBar, Typography, withStyles, Box } from "@material-ui/core";
import React from "react";
import { auth } from '../../config';

const Toolbar = withStyles({
    root: {
        justifyContent: "space-between"
    }
})(MuitoolBar)

export const NavBar: React.FC = () => {

    const logOut = async () => {
        await auth.signOut();
    }

    return <AppBar data-testid="ps-navbar">
        <Toolbar>
            <Typography variant="h5">Pic Some</Typography>
            <Box onClick={logOut}>
                <Typography variant="body1">Log Out</Typography>
            </Box>
        </Toolbar>
    </AppBar>;
}