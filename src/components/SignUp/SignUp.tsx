import React from 'react';
import { Paper, Typography, Container, TextField, Button, Link } from "@material-ui/core";
import { useSignUpStyles } from './styles';
import { auth } from '../../utils';
import { useHistory } from 'react-router-dom';

export const SignUp: React.FC = () => {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const [error, setError] = React.useState(false);

    const classes = useSignUpStyles();
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

    const signUp = () => {
        auth.createUserWithEmailAndPassword(state.email, state.password);
    }

    const login = () => {
        history.push("login");
    }

    return <Container data-testid="ps-signup" className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
            <Typography className={classes.textColor} variant="h4">Hello Friend!</Typography>
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
            <Button fullWidth variant="outlined" onClick={signUp}>
                <Typography variant="h6" color="textSecondary">Sign Up</Typography>
            </Button>
            <Link onClick={login} href="">
                <Typography className={classes.textColor} variant="h6">
                    Already have an account? Login.
                </Typography>
            </Link>
        </Paper>
    </Container>;

}