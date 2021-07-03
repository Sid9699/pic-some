import React from 'react';
import { Paper, Typography, Container, TextField, Button, Link } from "@material-ui/core";
import { useLoginStyles } from './styles';
import { auth } from '../../utils';
import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const [error, setError] = React.useState(false);

    const classes = useLoginStyles();
    const history = useHistory();

    React.useEffect(() => {
        if (state.email === "") {
            setError(false);
        } else {
            setError(!validateEmail(state.email));
        }
    }, [state.email])

    const handleChange = (key: "email" | "password") => (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setState(prevState => ({
            ...prevState,
            [key]: event.target.value
        }))
    }

    const validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const login = () => {
        auth.signInWithEmailAndPassword(state.email, state.password);
    }

    const signUp = () => {
        history.push("signup");
    }

    return <Container data-testid="ps-login" className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
            <Typography className={classes.textColor} variant="h4">Welcome Back</Typography>
            <TextField
                variant="filled"
                fullWidth
                placeholder="Email"
                onChange={handleChange("email")}
                error={error}
            />
            <TextField
                variant="filled"
                fullWidth
                placeholder="Password"
                onChange={handleChange("password")}
            />
            <Link onClick={() => { }} href="#">
                <Typography className={classes.textColor} variant="h6">
                    Forgot password?
                </Typography>
            </Link>
            <Button fullWidth variant="outlined" onClick={login}>
                <Typography variant="h6" color="textSecondary">Login</Typography>
            </Button>
            <Link onClick={signUp} href="">
                <Typography className={classes.textColor} variant="h6">
                    New here? SignUp.
                </Typography>
            </Link>
        </Paper>
    </Container>;

}