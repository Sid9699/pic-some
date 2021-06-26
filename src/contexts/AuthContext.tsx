import React from 'react';
import { auth } from "../utils";
import firebase from "firebase";
import { IAuthContext } from "./interfaces";

export const AuthContext = React.createContext<IAuthContext>({
    user: null
});

export const AuthProvider: React.FC = (props) => {

    const [user, setUser] = React.useState<firebase.User | null>(null);

    React.useEffect(() => {
        const unmount = auth.onAuthStateChanged((user) => {
            setUser(user);
        })
        return unmount;
    }, []);

    return <AuthContext.Provider value={{
        user
    }}>{props.children}</AuthContext.Provider>;

}