import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpNLHTdysidIKVztYDWUuR4wRCMg8dlco",
  authDomain: "nextfirestore-blog.firebaseapp.com",
  projectId: "nextfirestore-blog",
  storageBucket: "nextfirestore-blog.appspot.com",
  messagingSenderId: "753887160095",
  appId: "1:753887160095:web:e1e352c75ed912610fb22a"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();