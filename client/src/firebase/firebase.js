// Initialize Firebase
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCtxu3lGMknPotXSabBvcPlksXvqhkvxJM",
  authDomain: "vue-facebook.firebaseapp.com",
  databaseURL: "https://vue-facebook.firebaseio.com",
  projectId: "vue-facebook",
  storageBucket: "",
  messagingSenderId: "964462160051"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};