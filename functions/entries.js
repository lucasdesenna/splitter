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
      .then(snapshot => {
        const entries = snapshot.val();
        response.send(entries);
        return console.log(entries);
      })
      .catch(reason => console.warn(reason));
  } else {
    response.status(500).send('missing param: "id"');
  }
};

const post = (request, response) => {
  if (request.body) {
    const payload = request.body;

    const entryRef = firebase
      .database()
      .ref(`/entries/${payload.circleId}`)
      .push();

    const entry = Object.assign({}, payload, {
      id: entryRef.key,
      unixTimestamp: firebase.database.ServerValue.TIMESTAMP,
    });

    entryRef
      .set(entry)
      .then(sucess => {
        response.status(200).send(entry);
        return console.log(`SUCCESS: wrote entry to ${entryRef.key}`);
      })
      .catch(error => {
        response.status(500).send(error);
        return console.error(error);
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

exports.getEntriesByUser = functions.https.onRequest((request, response) => {
  if (request.query.id) {
    firebase
      .database()
      .ref(`/entries`)
      .orderByChild('userId')
      .equalTo(request.query.id)
      .once('value')
      .then(snapshot => {
        const entries = snapshot.val();

        response.send(entries);
        return console.log(entries);
      })
      .catch(reason => console.warn(reason));
  } else {
    response.status(500).send('missing param: "id"');
  }
});
