import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyCJstN4ZPz0BhxQCVk2Zp6lOV-RwtDJh-M",
  authDomain: "ui-ux-implementation.firebaseapp.com",
  databaseURL: "https://ui-ux-implementation.firebaseio.com",
  projectId: "ui-ux-implementation",
  storageBucket: "ui-ux-implementation.appspot.com",
  messagingSenderId: "614444642527",
  appId: "1:614444642527:web:21af28c6bf13d9b488f96a",
  measurementId: "G-000VD5M4C8"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { db, auth, facebookProvider, googleProvider };
