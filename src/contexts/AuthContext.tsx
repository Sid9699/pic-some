import { createContext, useEffect, useState } from 'react';
import { auth } from '../config';
import firebase from 'firebase';
import { IAuthContext } from './interfaces';

export const AuthContext = createContext<IAuthContext>({
	user: null
});

export const AuthProvider: React.FC = (props) => {

	const [user, setUser] = useState<firebase.User | null>(null);

	useEffect(() => {
		const unmount = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		return unmount;
	}, []);

	return <AuthContext.Provider value={{
		user
	}}>{props.children}</AuthContext.Provider>;

};