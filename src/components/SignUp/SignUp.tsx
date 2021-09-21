import { useState, useEffect } from 'react';
import { Paper, Typography, Container, TextField, Button, Link } from "@material-ui/core";
import { useSignUpStyles } from './styles';
import { auth } from '../../config';
import { useHistory } from 'react-router-dom';

export const SignUp: React.FC = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false);

    const classes = useSignUpStyles();
    const history = useHistory();

    useEffect(() => {
        if (state.email === "") {
            setError(false);
        } else {
            setError(!validateEmail(state.email));
        }
    }, [state.email])

    const handleChange = (key: keyof typeof state) => (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setState(prevState => ({
            ...prevState,
            [key]: event.target.value
        }))
    }

    const validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const signUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(state.email, state.password);
        } catch (err) {
            console.log(err);
        }
    }

    const login = () => {
        history.push("login");
    }

    return <Container data-testid="ps-signup" className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
            <Typography className={classes.textColor} variant="h4">Hello Friend!</Typography>
            <TextField
                className={classes.textField}
                variant="outlined"
                color="secondary"
                fullWidth
                placeholder="Email"
                onChange={handleChange("email")}
                error={error}
            />
            <TextField
                className={classes.textField}
                variant="outlined"
                color="secondary"
                fullWidth
                typeof="password"
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