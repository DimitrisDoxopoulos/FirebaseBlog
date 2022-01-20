import firebase from 'firebase/app'
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA80yFTW3Tcj_MIsj4f2D2JU6w0cKaMkXU",
  authDomain: "fireblog-28aea.firebaseapp.com",
  projectId: "fireblog-28aea",
  storageBucket: "fireblog-28aea.appspot.com",
  messagingSenderId: "235324228738",
  appId: "1:235324228738:web:ab463c4c962a6d11cee09b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {timestamp};
export default firebaseApp.firestore();