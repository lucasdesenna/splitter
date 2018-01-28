import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDyNYJjis6l9_8Yjc8o547CPPe-WBArIHw',
  authDomain: 'splitter-7e59a.firebaseapp.com',
  databaseURL: 'https://splitter-7e59a.firebaseio.com',
  projectId: 'splitter-7e59a',
  storageBucket: 'splitter-7e59a.appspot.com',
  messagingSenderId: '910645507282',
};

const firebaseService = {
  init: () => {
    firebase.initializeApp(config);
  },
};

export default firebaseService;
