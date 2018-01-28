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
      })
      .catch(reason => console.warn(reason));
  } else {
    response.status(500).send('missing param: "id"');
  }
};

exports.users = functions.https.onRequest( ( request, response ) => {
  switch ( request.method ) {
    case 'GET':
      get( request, response );
      break;

    // case 'POST':
    //   post( request, response );
    //   break;

    default:
      response.end();
  }
} );