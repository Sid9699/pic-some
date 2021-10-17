import { useState, useEffect } from 'react';
import { Paper, Typography, Container, TextField, Button, Link } from "@material-ui/core";
import { useLoginStyles } from './styles';
import { auth } from '../../config';
import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false);

    const classes = useLoginStyles();
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
        return re.test(email.toLowerCase());
    }

    const login = async () => {
        try {
            await auth.signInWithEmailAndPassword(state.email, state.password);
        } catch (err) {
            console.log(err);
        }
    }

    const signUp = () => {
        history.push("signup");
    }

    return <Container data-testid="ps-login" className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
            <Typography variant="h4" color="inherit">Welcome Back</Typography>
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
            <Link onClick={() => { }} variant="h6" color="inherit" underline="none">
                Forgot password?
            </Link>
            <Button fullWidth variant="outlined" onClick={login}>
                <Typography variant="h6" color="textSecondary">Login</Typography>
            </Button>
            <Link onClick={signUp} variant="h6" color="inherit" underline="none">
                New here? SignUp.
            </Link>
        </Paper>
    </Container>;
}