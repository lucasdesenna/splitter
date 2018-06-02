const functions = require('firebase-functions');
const firebase = require('firebase');

const get = (request, response) => {
  if (request.query.id) {
    return firebase
      .database()
      .ref(`/users/${request.query.id}`)
      .once('value')
      .then(snapshot => {
        response.send(snapshot.val());
        return console.log(`SUCCESS: got user ${request.query.id}`);
      })
      .catch(reason => console.warn(reason));
  } else {
    const reason = 'missing param: "id"';
    response.status(500).send(reason);
    return console.warn(reason);
  }
};

exports.users = functions.https.onRequest((request, response) => {
  switch (request.method) {
    case 'GET':
      get(request, response);
      break;

    // case 'POST':
    //   post( request, response );
    //   break;

    default:
      response.end();
  }
});
