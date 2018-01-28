const functions = require('firebase-functions');
const firebase = require('firebase');

const get = (request, response) => {
  if (request.query.id) {
    firebase
      .database()
      .ref(`/entries`)
      .orderByChild('circleId')
      .equalTo(request.query.id)
      .once('value')
      .then(snapshot => response.send(snapshot.val()))
      .catch(reason => console.warn(reason));
  } else {
    response.status(500).send('missing param: "id"');
  }
};

exports.getEntriesByUser = functions.https.onRequest((request, response) => {
  if (request.query.id) {
    firebase
      .database()
      .ref(`/entries`)
      .orderByChild('userId')
      .equalTo(request.query.id)
      .once('value')
      .then(snapshot => response.send(snapshot.val()))
      .catch(reason => console.warn(reason));
  } else {
    response.status(500).send('missing param: "id"');
  }
});

const post = (request, response) => {
  if (request.body) {
    const entryRef = firebase
      .database()
      .ref(`/entries`)
      .push();

    entryRef
      .set(request.body)
      .then(sucess => {
        response.status(200).send(sucess);
      })
      .catch(error => {
        response.status(500).send(error);
      });
  } else {
    response.status(500).send('missing param: "body"');
  }
};

exports.entries = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'GET':
      get(request, response);
      break;

    case 'POST':
      post(request, response);
      break;

    default:
      response.end();
  }
});
