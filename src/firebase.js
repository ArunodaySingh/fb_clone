import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "fbclone-ccd5c.firebaseapp.com",
    projectId: "fbclone-ccd5c",
    storageBucket: "fbclone-ccd5c.appspot.com",
    messagingSenderId: "597479596455",
    appId: "",
    measurementId: "G-MLJGCDD33W"
}
)

const db = firebaseApp.firestore()

export { db };
