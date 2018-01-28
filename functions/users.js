const functions = require('firebase-functions');
const firebase = require('firebase');

exports.getUser = functions.https.onRequest((request, response) => {
  if (!!request.query.id) {
    firebase
      .database()
      .ref(`/users/${request.query.id}`)
      .once('value')
      .then(snapshot => snapshot.val())
      .catch(reason => console.warn(reason));
  } else {
    response.status(500).send('missing param: "id"');
  }
});
