import {auth} from "../firebase/firebase.utils";

export function createUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password )
    .then(() => {
      console.log('success');
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
    })
}

export function signIn(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('success');
    })
    .catch(err => {
      console.log(err.code);
      console.log(err.message);
    })
}

export function signOut() {
  auth.signOut().then(function() {
    // Sign-out successful.
    console.log('signed out');
  }).catch((err) => {
    // An error happened.
    console.log(err);
  });
}

