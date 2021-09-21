import { AppBar, Toolbar as MuitoolBar, Typography, withStyles, Link } from "@material-ui/core";
import React from "react";
import { auth } from '../../config';

const Toolbar = withStyles({
    root: {
        justifyContent: "space-between",
        '& > *': {
            cursor: 'pointer',
        }
    }
})(MuitoolBar)

export const NavBar: React.FC = () => {

    const logOut = async () => {
        await auth.signOut();
    }

    return <AppBar data-testid="ps-navbar">
        <Toolbar>
            <Typography variant="h5">Pic Some</Typography>
            <Link onClick={logOut} variant="h6" color="inherit" underline="none">
                Log Out
            </Link>
        </Toolbar>
    </AppBar>;
}