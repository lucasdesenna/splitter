const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyDyNYJjis6l9_8Yjc8o547CPPe-WBArIHw',
  authDomain: 'splitter-7e59a.firebaseapp.com',
  databaseURL: 'https://splitter-7e59a.firebaseio.com',
  projectId: 'splitter-7e59a',
  storageBucket: 'splitter-7e59a.appspot.com',
  messagingSenderId: '910645507282',
};
firebase.initializeApp(config);

const { circle } = require('./circle');
const { entries, getEntriesByUser } = require('./entries');

exports.circle = circle.circle;
exports.entries = entries;
exports.getEntriesByUser = getEntriesByUser;
