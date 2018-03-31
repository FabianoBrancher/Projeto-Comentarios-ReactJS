import Rebase from 're-base';
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB86yTSfvOntiqc-1D-11865NoT0AV5c_M",
    authDomain: "sistema-comentarios-reactjs.firebaseapp.com",
    databaseURL: "https://sistema-comentarios-reactjs.firebaseio.com",
    projectId: "sistema-comentarios-reactjs",
    storageBucket: "sistema-comentarios-reactjs.appspot.com",
    messagingSenderId: "345681167691"
});

const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth();
export default base;