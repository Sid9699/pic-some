import firebase from 'firebase';

export interface IAuthContext {
    user: firebase.User | null;
}