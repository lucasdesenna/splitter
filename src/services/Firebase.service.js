import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDyNYJjis6l9_8Yjc8o547CPPe-WBArIHw',
  authDomain: 'splitter-7e59a.firebaseapp.com',
  databaseURL: 'https://splitter-7e59a.firebaseio.com',
  projectId: 'splitter-7e59a',
  storageBucket: 'splitter-7e59a.appspot.com',
  messagingSenderId: '910645507282',
};

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.addScope(
  'https://www.googleapis.com/auth/plus.me,https://www.googleapis.com/auth/userinfo.profile'
);

const firebaseService = {
  init: () => {
    firebase.initializeApp(config);
    firebase.auth().languageCode = 'pt-BR';
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  },
  database: firebase.database,
  signIn: () =>
    new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(authProvider)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.warn(error);
          reject(error);
        });
    }),
  signOut: () => firebase.auth().signOut(),
  onAuthStateChanged: callback => {
    firebase.auth().onAuthStateChanged(callback);
  },
};

export default firebaseService;
