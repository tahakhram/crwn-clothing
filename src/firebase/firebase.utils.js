import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA1_2_IlImPvo7tInAinkDtiOfko-qlXoA",
        authDomain: "crwn-db-89977.firebaseapp.com",
        projectId: "crwn-db-89977",
        storageBucket: "crwn-db-89977.appspot.com",
        messagingSenderId: "819923097035",
        appId: "1:819923097035:web:f34ad2ea9bed555461924e",
        measurementId: "G-YDT9GRRYD4"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;